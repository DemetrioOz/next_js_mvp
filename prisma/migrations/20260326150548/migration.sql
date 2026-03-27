/*
  Warnings:

  - Added the required column `locationId` to the `Colaborators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colaborators" ADD COLUMN     "locationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "locationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colaborators" ADD CONSTRAINT "Colaborators_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
