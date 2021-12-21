export const schema = gql`
  type Node {
    id: Int!
    createdAt: DateTime!
    title: String!
    content: String!
  }

  type Query {
    nodes: [Node!]! @requireAuth
    node(id: Int!): Node @requireAuth
  }

  input CreateNodeInput {
    title: String!
    content: String!
  }

  input UpdateNodeInput {
    title: String
    content: String
  }

  type Mutation {
    createNode(input: CreateNodeInput!): Node! @requireAuth
    updateNode(id: Int!, input: UpdateNodeInput!): Node! @requireAuth
    deleteNode(id: Int!): Node! @requireAuth
  }
`
