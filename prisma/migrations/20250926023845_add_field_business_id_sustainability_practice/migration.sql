/*
  Warnings:

  - Added the required column `businessId` to the `sustainability_practices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."sustainability_practices" ADD COLUMN     "businessId" INTEGER NOT NULL;
