import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const nodes = () => {
  return db.node.findMany()
}

export const node = ({ id }) => {
  return db.node.findUnique({
    where: { id },
  })
}

export const createNode = ({ input }) => {
  requireAuth()
  return db.node.create({
    data: input,
  })
}

export const updateNode = ({ id, input }) => {
  requireAuth()
  return db.node.update({
    data: input,
    where: { id },
  })
}

export const deleteNode = ({ id }) => {
  requireAuth()
  return db.node.delete({
    where: { id },
  })
}
