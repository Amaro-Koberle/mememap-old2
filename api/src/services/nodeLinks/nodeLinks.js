import { db } from 'src/lib/db'

export const nodeLinks = () => {
  return db.nodeLink.findMany()
}

export const nodeLink = ({ id }) => {
  return db.nodeLink.findUnique({
    where: { id },
  })
}

export const createNodeLink = ({ input }) => {
  return db.nodeLink.create({
    data: input,
  })
}

export const updateNodeLink = ({ id, input }) => {
  return db.nodeLink.update({
    data: input,
    where: { id },
  })
}

export const deleteNodeLink = ({ id }) => {
  return db.nodeLink.delete({
    where: { id },
  })
}

export const NodeLink = {
  sourceNode: (_obj, { root }) =>
    db.nodeLink.findUnique({ where: { id: root.id } }).sourceNode(),
  targetNode: (_obj, { root }) =>
    db.nodeLink.findUnique({ where: { id: root.id } }).targetNode(),
}
