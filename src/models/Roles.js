import prisma from "../prismaClient.js";
class Roles {
  static findAll() { return prisma.roles.findMany(); }
  static findById(id) { return prisma.roles.findUnique({ where: { id_rol: Number(id) } }); }
  static create(data) { return prisma.roles.create({ data }); }
  static update(id, data) { return prisma.roles.update({ where: { id_rol: Number(id) }, data }); }
  static delete(id) { return prisma.roles.delete({ where: { id_rol: Number(id) } }); }
}
export default Roles;
