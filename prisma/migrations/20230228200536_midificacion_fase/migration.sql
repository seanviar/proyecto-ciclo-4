/*
  Warnings:

  - The values [nulo] on the enum `Enum_Fase_Proyecto` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Enum_Fase_Proyecto_new" AS ENUM ('Iniciado', 'En_Desarrollo', 'Terminado');
ALTER TABLE "Proyecto" ALTER COLUMN "fase" TYPE "Enum_Fase_Proyecto_new" USING ("fase"::text::"Enum_Fase_Proyecto_new");
ALTER TYPE "Enum_Fase_Proyecto" RENAME TO "Enum_Fase_Proyecto_old";
ALTER TYPE "Enum_Fase_Proyecto_new" RENAME TO "Enum_Fase_Proyecto";
DROP TYPE "Enum_Fase_Proyecto_old";
COMMIT;
