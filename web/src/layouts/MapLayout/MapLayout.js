import { Link, routes } from '@redwoodjs/router'
import MapCell from 'src/components/Map/MapCell/MapCell'
import MagicLinkAuth from 'src/components/MagicLinkAuth/MagicLinkAuth'

const MapLayout = () => {
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
        <MagicLinkAuth />
        <MapCell />
      </main>
    </>
  )
}

export default MapLayout
