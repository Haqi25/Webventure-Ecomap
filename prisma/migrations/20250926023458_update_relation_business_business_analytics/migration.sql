-- AddForeignKey
ALTER TABLE "public"."business_analytics" ADD CONSTRAINT "business_analytics_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
