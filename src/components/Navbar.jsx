import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import logo from "../../public/assets/images/logo-removebg-preview.png"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={logo} alt="ZC" width={50} height={50} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <a href={nav.url}>

            
            <div key={nav.id} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav.title}
            </div>
            </a>
          ))}
        </div>

        {/* <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar