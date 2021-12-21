import { Link, routes } from '@redwoodjs/router'
import Map from 'src/components/Map/Map/Map'

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
          <Map />
        </div>
      </main>
    </>
  )
}

export default MapLayout
