-- AddForeignKey
ALTER TABLE "public"."sustainability_practices" ADD CONSTRAINT "sustainability_practices_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
