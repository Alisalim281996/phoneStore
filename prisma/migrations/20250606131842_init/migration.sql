-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "displaySize" TEXT NOT NULL,
    "batterySize" TEXT NOT NULL,
    "frontCamera" TEXT NOT NULL,
    "backCamera" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "colors" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isComingSoon" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);
