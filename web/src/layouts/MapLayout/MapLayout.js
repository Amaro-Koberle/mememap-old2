import { Link, routes } from '@redwoodjs/router'
import MapCell from 'src/components/Map/MapCell/MapCell'

const MapLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.explore()}>Explore</Link>
            </li>
            <li>
              <Link to={routes.explore()}>New Node</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div>{children}</div>
        <div>
          <MapCell />
        </div>
      </main>
    </>
  )
}

export default MapLayout
