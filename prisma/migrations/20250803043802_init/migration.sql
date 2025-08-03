-- CreateTable
CREATE TABLE "public"."Stanje" (
    "id" SERIAL NOT NULL,
    "korisnik" TEXT NOT NULL,
    "stanje" DOUBLE PRECISION NOT NULL,
    "kredit" DOUBLE PRECISION ,
    "isplata" DOUBLE PRECISION ,
    "uplate" DOUBLE PRECISION ,

    CONSTRAINT "Stanje_pkey" PRIMARY KEY ("id")
);
