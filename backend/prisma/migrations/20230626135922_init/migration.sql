/*
  Warnings:

  - The primary key for the `Blogs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `blogID` on the `Blogs` table. All the data in the column will be lost.
  - Added the required column `ID` to the `Blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Blogs` DROP PRIMARY KEY,
    DROP COLUMN `blogID`,
    ADD COLUMN `ID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`ID`);

-- CreateTable
CREATE TABLE `Images` (
    `blogID` INTEGER NOT NULL,
    `Image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Images_Image_key`(`Image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `Blogs`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
