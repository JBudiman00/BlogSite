-- CreateTable
CREATE TABLE `Blogs` (
    `blogID` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('Nathan', 'Chloe', 'ChloeNathan') NOT NULL,
    `category` ENUM('life', 'food', 'places', 'attractions') NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`blogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
