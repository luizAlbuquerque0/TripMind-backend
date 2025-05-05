-- AddForeignKey
ALTER TABLE "travel_cities" ADD CONSTRAINT "travel_cities_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
