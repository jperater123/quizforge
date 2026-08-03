/*
  Warnings:

  - You are about to drop the column `guestID` on the `GuestTrial` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "GuestTrial_guestID_key";

-- AlterTable
ALTER TABLE "GuestTrial" DROP COLUMN "guestID";
