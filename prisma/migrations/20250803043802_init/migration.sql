-- CreateTable
CREATE TABLE "public"."Stanje" (
    "id" SERIAL NOT NULL,
    "korisnik" TEXT NOT NULL,
    "stanje" DOUBLE PRECISION NOT NULL,
    "kredit" DOUBLE PRECISION NOT NULL,
    "isplata" DOUBLE PRECISION NOT NULL,
    "uplate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stanje_pkey" PRIMARY KEY ("id")
);
