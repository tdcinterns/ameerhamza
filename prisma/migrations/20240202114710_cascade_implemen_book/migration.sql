-- DropForeignKey
ALTER TABLE "BookStatus" DROP CONSTRAINT "BookStatus_bookID_fkey";

-- AddForeignKey
ALTER TABLE "BookStatus" ADD CONSTRAINT "BookStatus_bookID_fkey" FOREIGN KEY ("bookID") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
