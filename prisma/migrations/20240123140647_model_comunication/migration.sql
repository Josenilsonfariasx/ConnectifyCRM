-- DropForeignKey
ALTER TABLE "Communication" DROP CONSTRAINT "Communication_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Communication" DROP CONSTRAINT "Communication_contactId_fkey";

-- AlterTable
ALTER TABLE "Communication" ALTER COLUMN "clientId" DROP NOT NULL,
ALTER COLUMN "contactId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
