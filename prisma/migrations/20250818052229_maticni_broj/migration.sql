/*
  Warnings:

  - Added the required column `matičniBroj` to the `Stanje` table without a default value. This is not possible if the table is not empty.
  - Made the column `kredit` on table `Stanje` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isplata` on table `Stanje` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uplate` on table `Stanje` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Stanje" ADD COLUMN     "matičniBroj" TEXT NOT NULL,
ALTER COLUMN "kredit" SET NOT NULL,
ALTER COLUMN "isplata" SET NOT NULL,
ALTER COLUMN "uplate" SET NOT NULL;
