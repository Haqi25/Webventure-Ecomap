/*
  Warnings:

  - Added the required column `businessId` to the `business_analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."business_analytics" ADD COLUMN     "businessId" INTEGER NOT NULL;
