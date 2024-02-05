/*
  Warnings:

  - Added the required column `totalRented` to the `BookStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalSold` to the `BookStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookStatus" ADD COLUMN     "totalRented" INTEGER NOT NULL,
ADD COLUMN     "totalSold" INTEGER NOT NULL;
