-- CreateTable
CREATE TABLE "Roles" (
    "id_rol" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "Permisos" (
    "id_permiso" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "Permisos_pkey" PRIMARY KEY ("id_permiso")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "VerDetalleRol" (
    "id_detalle" SERIAL NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "id_permiso" INTEGER NOT NULL,

    CONSTRAINT "VerDetalleRol_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "Referencias" (
    "id_referencia" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Referencias_pkey" PRIMARY KEY ("id_referencia")
);

-- CreateTable
CREATE TABLE "OrdenProduccion" (
    "id_orden" SERIAL NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "OrdenProduccion_pkey" PRIMARY KEY ("id_orden")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" INTEGER,
    "correo" TEXT,
    "pagina" TEXT,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "VerDetalleOrden" (
    "id_detalle" SERIAL NOT NULL,
    "id_orden" INTEGER NOT NULL,
    "id_referencia" INTEGER NOT NULL,
    "Cantidad" INTEGER NOT NULL,

    CONSTRAINT "VerDetalleOrden_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "Maquinas" (
    "id_maquina" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Maquinas_pkey" PRIMARY KEY ("id_maquina")
);

-- CreateTable
CREATE TABLE "Operaciones" (
    "id_operacion" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id_referencia" INTEGER NOT NULL,
    "id_maquina" INTEGER NOT NULL,
    "cantidad_estimada" INTEGER NOT NULL,

    CONSTRAINT "Operaciones_pkey" PRIMARY KEY ("id_operacion")
);

-- CreateTable
CREATE TABLE "Avances" (
    "id_avance" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL,
    "id_detalle" INTEGER NOT NULL,
    "id_operacion" INTEGER NOT NULL,

    CONSTRAINT "Avances_pkey" PRIMARY KEY ("id_avance")
);

-- CreateTable
CREATE TABLE "Operarias" (
    "id_operaria" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Operarias_pkey" PRIMARY KEY ("id_operaria")
);

-- CreateTable
CREATE TABLE "Desempeno" (
    "id_desempeno" SERIAL NOT NULL,
    "Cantida_producida" INTEGER NOT NULL,
    "productividad" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_orden" INTEGER NOT NULL,

    CONSTRAINT "Desempeno_pkey" PRIMARY KEY ("id_desempeno")
);

-- CreateTable
CREATE TABLE "VerDetalleDesempeno" (
    "id_detalle" SERIAL NOT NULL,
    "id_desempeno" INTEGER NOT NULL,
    "id_operaria" INTEGER NOT NULL,
    "id_operacion" INTEGER NOT NULL,
    "Cantidad" INTEGER NOT NULL,
    "Eficiencia" BOOLEAN NOT NULL,
    "Porcentaje" DOUBLE PRECISION NOT NULL,
    "id_detalle_orden" INTEGER,

    CONSTRAINT "VerDetalleDesempeno_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "ReportesDesempeno" (
    "id_reporte" SERIAL NOT NULL,
    "desempeno_operaria" TEXT NOT NULL,
    "prendas_producidas" INTEGER NOT NULL,
    "hora_revision" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_detalle_desempeno" INTEGER NOT NULL,
    "id_desempeno" INTEGER,

    CONSTRAINT "ReportesDesempeno_pkey" PRIMARY KEY ("id_reporte")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_correo_key" ON "Usuarios"("correo");
