import { Navbar, Button, Dropdown } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-300 rounded-lg text-white">
          Board
        </span>
        Me
      </Link>
      <div className="flex gap-2 md:order-1">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Dropdown label="Reservations" inline>
          <Dropdown.Item>
            <Link to="/spaces" >Spaces</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/events">Events</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/services">Services</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Link active={path === "/listings"} as={'div'}>
          <Link to="/listings">Listings</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
