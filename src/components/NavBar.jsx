import NavItem from "./NavItem";

function NavBar({ items, activeIndex }) {
  console.log(items);
  return (
    <nav className="group z-50 fixed border-r border-white border-opacity-10 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg transition-width duration-500 overflow-auto sm:hover:w-64 bottom-0 w-screen h-20 sm:top-0 sm:w-20 sm:h-screen">
      <ul className="flex sm:flex-col justify-center items-center h-full">
        {items.map((item, index) => {
          return (
            <NavItem
              isActive={index === activeIndex}
              text={item[0]}
              to={item[1]}
              svg={item[3]}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
