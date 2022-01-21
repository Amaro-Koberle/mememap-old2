// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import NodeLinksLayout from 'src/layouts/NodeLinksLayout'
import NodesLayout from 'src/layouts/NodesLayout'
import MapLayout from './layouts/MapLayout/MapLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NodeLinksLayout}>
        <Route path="/node-links/{id}/edit" page={NodeLinkEditNodeLinkPage} name="editNodeLink" />
      </Set>
      <Set wrap={MapLayout}>
        <Route path="/links/{id}" page={NodeLinkNodeLinkPage} name="nodeLink" />
        <Route path="/links/new/{source}/{target}" page={NodeLinkNewNodeLinkPage} name="newNodeLink" />
        <Route path="/nodes/{id}/select-linked-node/{linkedId}" page={SelectLinkedNodePage} name="selectLinkedNode" />
        <Route path="/" page={ExplorePage} name="explore" />
        <Route path="/nodes/new" page={NodeNewNodePage} name="newNode" />
        <Route path="/nodes/{id}/edit" page={NodeEditNodePage} name="editNode" />
        <Route path="/nodes/{id}" page={NodeNodePage} name="node" />
      </Set>
      <Set wrap={NodesLayout}>
        <Route path="/nodes" page={NodeNodesPage} name="nodes" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
