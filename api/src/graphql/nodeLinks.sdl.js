export const schema = gql`
  type NodeLink {
    id: String!
    createdAt: DateTime!
    name: String!
    sourceNode: Node!
    sourceNodeId: String!
    targetNode: Node!
    targetNodeId: String!
  }

  type Query {
    nodeLinks: [NodeLink!]! @requireAuth
    nodeLink(id: String!): NodeLink @requireAuth
  }

  input CreateNodeLinkInput {
    name: String!
    sourceNodeId: String!
    targetNodeId: String!
  }

  input UpdateNodeLinkInput {
    name: String
    sourceNodeId: String
    targetNodeId: String
  }

  type Mutation {
    createNodeLink(input: CreateNodeLinkInput!): NodeLink! @requireAuth
    updateNodeLink(id: String!, input: UpdateNodeLinkInput!): NodeLink!
      @requireAuth
    deleteNodeLink(id: String!): NodeLink! @requireAuth
  }
`
