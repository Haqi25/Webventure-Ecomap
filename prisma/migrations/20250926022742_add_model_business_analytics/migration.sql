-- CreateTable
CREATE TABLE "public"."business_analytics" (
    "id" SERIAL NOT NULL,
    "userIp" TEXT,
    "userAgent" TEXT,
    "referrer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_analytics_pkey" PRIMARY KEY ("id")
);
