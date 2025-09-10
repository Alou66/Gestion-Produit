-- CreateTable
CREATE TABLE `Produit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `categorie` ENUM('ALIMENTAIRE', 'CHIMIQUE', 'AGRICOLE') NOT NULL DEFAULT 'ALIMENTAIRE',
    `prix` INTEGER NOT NULL,
    `quantiteStock` INTEGER NOT NULL,
    `datePeremption` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,
    `stockmin` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
