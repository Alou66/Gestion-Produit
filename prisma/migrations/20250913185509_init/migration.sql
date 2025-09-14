-- CreateTable
CREATE TABLE `Produits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `categorie` ENUM('ALIMENTAIRE', 'CHIMIQUE', 'AGRICOLE') NOT NULL DEFAULT 'ALIMENTAIRE',
    `prix` INTEGER NOT NULL,
    `quantiteStock` INTEGER NOT NULL,
    `datePeremption` DATETIME(3) NOT NULL,
    `id_user` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produits` ADD CONSTRAINT `Produits_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
