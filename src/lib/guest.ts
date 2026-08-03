import { prisma } from "./prisma";
import { v4 as uuid } from "uuid";

export async function getOrCreateGuest(cookieStore: any) {
    const guestCookie = cookieStore.get("guestId");

    if (guestCookie) {
        const guest = await prisma.guestTrial.findUnique({
            where: {
                id: guestCookie.value,
            },
        });

        if (guest) {
            return guest;
        }
    }

    const guest = await prisma.guestTrial.create({
        data: {},
    });

    cookieStore.set("guestId", guest.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    });

    return guest;
}