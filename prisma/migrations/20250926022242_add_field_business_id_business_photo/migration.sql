/*
  Warnings:

  - Added the required column `businessId` to the `business_photos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."business_photos" ADD COLUMN     "businessId" INTEGER NOT NULL;
