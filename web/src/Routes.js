// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import MapLayout from './layouts/MapLayout/MapLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MapLayout}>
        <Route path="/links/{id}/edit" page={NodeLinkEditNodeLinkPage} name="editNodeLink" />
        <Route path="/links/{id}" page={NodeLinkNodeLinkPage} name="nodeLink" />
        <Route path="/links/new/{source}/{target}" page={NodeLinkNewNodeLinkPage} name="newNodeLink" />
        <Route path="/nodes/{id}/select-linked-node/{linkedId}" page={SelectLinkedNodePage} name="selectLinkedNode" />
        <Route path="/" page={ExplorePage} name="explore" />
        <Route path="/nodes/new" page={NodeNewNodePage} name="newNode" />
        <Route path="/nodes/{id}/edit" page={NodeEditNodePage} name="editNode" />
        <Route path="/nodes/{id}" page={NodeNodePage} name="node" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
