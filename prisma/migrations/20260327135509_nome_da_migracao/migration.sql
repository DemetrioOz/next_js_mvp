/*
  Warnings:

  - Added the required column `locationId` to the `Pheriperals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pheriperals" ADD COLUMN     "locationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Pheriperals" ADD CONSTRAINT "Pheriperals_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
