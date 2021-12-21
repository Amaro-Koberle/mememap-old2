import { db } from 'src/lib/db'

export const nodes = () => {
  return db.node.findMany()
}

export const node = ({ id }) => {
  return db.node.findUnique({
    where: { id },
  })
}

export const createNode = ({ input }) => {
  return db.node.create({
    data: input,
  })
}

export const updateNode = ({ id, input }) => {
  return db.node.update({
    data: input,
    where: { id },
  })
}

export const deleteNode = ({ id }) => {
  return db.node.delete({
    where: { id },
  })
}
