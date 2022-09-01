/*
  Warnings:

  - You are about to drop the column `roleInOranisation` on the `Organization` table. All the data in the column will be lost.
  - Added the required column `roleInOranisation` to the `OrganizationsUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Organization` DROP COLUMN `roleInOranisation`;

-- AlterTable
ALTER TABLE `OrganizationsUsers` ADD COLUMN `roleInOranisation` VARCHAR(255) NOT NULL;
