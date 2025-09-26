/*
  Warnings:

  - Added the required column `businessId` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."reviews" ADD COLUMN     "businessId" INTEGER NOT NULL;
