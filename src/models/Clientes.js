import prisma from "../prismaClient.js";
class Clientes {
  static findAll(){ return prisma.clientes.findMany(); }
  static findById(id){ return prisma.clientes.findUnique({ where: { id_cliente: Number(id) } }); }
  static create(data){ return prisma.clientes.create({ data }); }
  static update(id,data){ return prisma.clientes.update({ where: { id_cliente: Number(id) }, data }); }
  static delete(id){ return prisma.clientes.delete({ where: { id_cliente: Number(id) } }); }
}
export default Clientes;
