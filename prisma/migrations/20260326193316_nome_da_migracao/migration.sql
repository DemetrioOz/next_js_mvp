-- CreateTable
CREATE TABLE "Pheriperals" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "amout" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted_at" BOOLEAN NOT NULL DEFAULT false,
    "pheriperalsTypeId" TEXT NOT NULL,

    CONSTRAINT "Pheriperals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PheriperalsType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,

    CONSTRAINT "PheriperalsType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PheriperalsType_name_key" ON "PheriperalsType"("name");

-- AddForeignKey
ALTER TABLE "Pheriperals" ADD CONSTRAINT "Pheriperals_pheriperalsTypeId_fkey" FOREIGN KEY ("pheriperalsTypeId") REFERENCES "PheriperalsType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
