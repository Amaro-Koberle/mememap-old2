import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExplorePage = () => {
  return (
    <>
      <MetaTags title="Explore" description="Explore page" />

      <h1>ExplorePage</h1>
      <p>
        Find me in <code>./web/src/pages/ExplorePage/ExplorePage.js</code>
      </p>
      <p>
        My default route is named <code>explore</code>, link to me with `
        <Link to={routes.explore()}>Explore</Link>`
      </p>
    </>
  )
}

export default ExplorePage
