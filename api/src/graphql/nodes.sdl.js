export const schema = gql`
  type Node {
    id: String!
    createdAt: DateTime!
    name: String!
    content: String!
  }

  type Query {
    nodes: [Node!]! @requireAuth
    node(id: String!): Node @requireAuth
  }

  input CreateNodeInput {
    name: String!
    content: String!
  }

  input UpdateNodeInput {
    name: String
    content: String
  }

  type Mutation {
    createNode(input: CreateNodeInput!): Node! @requireAuth
    updateNode(id: String!, input: UpdateNodeInput!): Node! @requireAuth
    deleteNode(id: String!): Node! @requireAuth
  }
`
