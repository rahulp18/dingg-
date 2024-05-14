/*
  Warnings:

  - You are about to drop the column `fullName` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Staff` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "fullName",
DROP COLUMN "phoneNumber";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "fullName";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;
