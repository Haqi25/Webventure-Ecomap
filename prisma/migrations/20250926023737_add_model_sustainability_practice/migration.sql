-- CreateTable
CREATE TABLE "public"."sustainability_practices" (
    "id" SERIAL NOT NULL,
    "practiceType" TEXT NOT NULL,
    "practiceDescription" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "scoreWeight" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sustainability_practices_pkey" PRIMARY KEY ("id")
);
