-- CreateTable
CREATE TABLE "GuestTrial" (
    "id" TEXT NOT NULL,
    "guestID" TEXT NOT NULL,
    "remainingTrials" INTEGER NOT NULL DEFAULT 3,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUsed" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuestTrial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuestTrial_guestID_key" ON "GuestTrial"("guestID");
