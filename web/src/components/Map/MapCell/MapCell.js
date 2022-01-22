import Map from '../Map/Map'
import { useParams } from '@redwoodjs/router'

export const QUERY = gql`
  query GraphQuery {
    nodes {
      id
      name
    }
    nodeLinks {
      id
      name
      sourceNodeId
      targetNodeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ nodes, nodeLinks }) => {
  const { id } = useParams()
  const renameKey = (object, oldKey, newKey) => {
    const newObject = {}
    delete Object.assign(newObject, object, { [newKey]: object[oldKey] })[
      oldKey
    ]

    return newObject
  }

  const renameLinkKeys = (link) => {
    const renamedSourceKey = { ...renameKey(link, 'sourceNodeId', 'source') }
    const newLink = { ...renameKey(renamedSourceKey, 'targetNodeId', 'target') }
    return newLink
  }

  const determineColor = (graphElement) => {
    if (graphElement.id === id) {
      return '#e64b59'
    } else {
      return '#44403c'
    }
  }

  const prepareNodes = (nodes) => {
    return nodes.map((node) => ({ ...node, color: determineColor(node) }))
  }
  const prepareLinks = (nodeLinks) => {
    const preparedLinkKeyNames = nodeLinks.map(function (link) {
      return renameLinkKeys(link)
    })
    return preparedLinkKeyNames.map((link) => ({
      ...link,
      color: determineColor(link),
      width: 1,
    }))
  }

  const graphData = {
    nodes: prepareNodes(nodes),
    links: prepareLinks(nodeLinks),
  }

  return (
    <div>
      <Map graphData={graphData} />
    </div>
  )
}
