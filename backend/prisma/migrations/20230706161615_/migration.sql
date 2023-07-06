-- AlterTable
ALTER TABLE `Blogs` ADD COLUMN `is_featured` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Thumbnail` (
    `blogID` INTEGER NOT NULL,
    `ThumbnailImage` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Thumbnail_blogID_key`(`blogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Thumbnail` ADD CONSTRAINT `Thumbnail_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `Blogs`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
