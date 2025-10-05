/*
  Warnings:

  - You are about to drop the column `referrer` on the `business_analytics` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `business_analytics` table. All the data in the column will be lost.
  - You are about to drop the column `userIp` on the `business_analytics` table. All the data in the column will be lost.
  - Changed the type of `actionType` on the `business_analytics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."business_analytics" DROP COLUMN "referrer",
DROP COLUMN "userAgent",
DROP COLUMN "userIp",
ADD COLUMN     "metadata" JSONB,
DROP COLUMN "actionType",
ADD COLUMN     "actionType" TEXT NOT NULL;
