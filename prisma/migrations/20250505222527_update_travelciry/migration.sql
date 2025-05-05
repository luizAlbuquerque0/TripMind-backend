/*
  Warnings:

  - You are about to drop the `Cities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "travel_cities" DROP CONSTRAINT "travel_cities_cityId_fkey";

-- DropTable
DROP TABLE "Cities";

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_externalId_key" ON "cities"("externalId");
