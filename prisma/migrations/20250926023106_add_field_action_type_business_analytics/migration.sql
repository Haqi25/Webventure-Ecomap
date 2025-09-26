/*
  Warnings:

  - Added the required column `actionType` to the `business_analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."business_analytics" ADD COLUMN     "actionType" "public"."ActionType" NOT NULL;
