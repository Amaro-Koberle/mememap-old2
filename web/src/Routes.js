// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import NodesLayout from 'src/layouts/NodesLayout'
import MapLayout from './layouts/MapLayout/MapLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MapLayout}>
        <Route path="/" page={ExplorePage} name="explore" />
      </Set>

      <Set wrap={NodesLayout}>
        <Route path="/nodes/new" page={NodeNewNodePage} name="newNode" />
        <Route path="/nodes/{id:Int}/edit" page={NodeEditNodePage} name="editNode" />
        <Route path="/nodes/{id:Int}" page={NodeNodePage} name="node" />
        <Route path="/nodes" page={NodeNodesPage} name="nodes" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
