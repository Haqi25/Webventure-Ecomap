-- CreateTable
CREATE TABLE "public"."financing_options" (
    "id" SERIAL NOT NULL,
    "institutionName" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "interestRate" TEXT NOT NULL,
    "maxAmount" TEXT NOT NULL,
    "tenor" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "contactInfo" JSONB NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "financing_options_pkey" PRIMARY KEY ("id")
);
