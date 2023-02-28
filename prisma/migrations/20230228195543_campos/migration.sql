-- AlterTable
ALTER TABLE "Inscripcion" ALTER COLUMN "estado" SET DEFAULT 'Pendiente';

-- AlterTable
ALTER TABLE "Proyecto" ALTER COLUMN "fechaFin" DROP NOT NULL,
ALTER COLUMN "estado" SET DEFAULT 'Inactivo',
ALTER COLUMN "fase" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "estado" SET DEFAULT 'Pendiente';
