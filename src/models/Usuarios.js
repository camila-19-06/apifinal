import prisma from "../prismaClient.js";
class Usuarios {
  static findAll() { return prisma.usuarios.findMany(); }
  static findById(id) { return prisma.usuarios.findUnique({ where: { id_usuario: Number(id) } }); }
  static create(data) { return prisma.usuarios.create({ data }); }
  static update(id,data){ return prisma.usuarios.update({ where: { id_usuario: Number(id) }, data }); }
  static delete(id){ return prisma.usuarios.delete({ where: { id_usuario: Number(id) } }); }
}
export default Usuarios;
