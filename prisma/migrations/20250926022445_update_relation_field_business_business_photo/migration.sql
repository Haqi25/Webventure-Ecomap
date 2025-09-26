-- AddForeignKey
ALTER TABLE "public"."business_photos" ADD CONSTRAINT "business_photos_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
