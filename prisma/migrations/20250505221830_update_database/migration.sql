/*
  Warnings:

  - You are about to drop the column `travelId` on the `Activities` table. All the data in the column will be lost.
  - You are about to drop the column `destination` on the `Travels` table. All the data in the column will be lost.
  - You are about to drop the column `origin` on the `Travels` table. All the data in the column will be lost.
  - You are about to alter the column `budget` on the `Travels` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Added the required column `travelCityId` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_travelId_fkey";

-- AlterTable
ALTER TABLE "Activities" DROP COLUMN "travelId",
ADD COLUMN     "travelCityId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Travels" DROP COLUMN "destination",
DROP COLUMN "origin",
ALTER COLUMN "budget" SET DATA TYPE DECIMAL(65,30);

-- CreateTable
CREATE TABLE "Cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_cities" (
    "id" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "travel_cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cities_name_key" ON "Cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "travel_cities_travelId_order_key" ON "travel_cities"("travelId", "order");

-- AddForeignKey
ALTER TABLE "travel_cities" ADD CONSTRAINT "travel_cities_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_cities" ADD CONSTRAINT "travel_cities_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_travelCityId_fkey" FOREIGN KEY ("travelCityId") REFERENCES "travel_cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
