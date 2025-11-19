import prisma from "../prismaClient.js";
class Permisos {
  static findAll() { return prisma.permisos.findMany(); }
  static findById(id) { return prisma.permisos.findUnique({ where: { id_permiso: Number(id) } }); }
  static create(data) { return prisma.permisos.create({ data }); }
  static update(id,data){ return prisma.permisos.update({ where: { id_permiso: Number(id) }, data }); }
  static delete(id){ return prisma.permisos.delete({ where: { id_permiso: Number(id) } }); }
}
export default Permisos;
