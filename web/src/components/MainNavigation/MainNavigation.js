import { Link, routes } from '@redwoodjs/router'
import { FaCompass } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'

const MainNavigation = () => {
  return (
    <nav className="m-4 text-stone-800 text-xs">
      <ul className="grid grid-rows-5 grid-cols-1 gap-4 justify-items-center">
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <FaCompass className="text-2xl" />
            Explore
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <FaWallet className="text-2xl" />
            Wallet
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <FaPlusCircle className="text-2xl" />
            Create
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <FaUserCircle className="text-2xl" />
            Me
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <FaCog className="text-2xl" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
