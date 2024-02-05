-- DropForeignKey
ALTER TABLE "AuthorContact" DROP CONSTRAINT "AuthorContact_authorID_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorID_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_genreID_fkey";

-- AddForeignKey
ALTER TABLE "AuthorContact" ADD CONSTRAINT "AuthorContact_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_genreID_fkey" FOREIGN KEY ("genreID") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
