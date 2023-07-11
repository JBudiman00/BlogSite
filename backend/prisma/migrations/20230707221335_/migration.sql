/*
  Warnings:

  - You are about to drop the column `Image` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `ThumbnailImage` on the `Thumbnail` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[image]` on the table `Images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailImage` to the `Thumbnail` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Images_Image_key` ON `Images`;

-- AlterTable
ALTER TABLE `Images` DROP COLUMN `Image`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Thumbnail` DROP COLUMN `ThumbnailImage`,
    ADD COLUMN `thumbnailImage` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Images_image_key` ON `Images`(`image`);
