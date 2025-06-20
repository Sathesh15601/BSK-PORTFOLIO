import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/sk.png";
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import resume from "../assets/Sathesh kumar Resume.pdf";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <nav className="fixed px-2 py-2 bg-transparent w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full px-4">
        <div>
          <img
            src={image}
            alt="Sk Logo"
            className="rounded-full w-12 h-12 object-cover "
          />
        </div>
        <div className="hidden md:flex gap-5">
          {navList.map((list, index) => (
            <NavLink
              key={index}
              to={list.href}
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2 text-white font-bold border-b-3 border-fuchsia-900 transition duration-200"
                  : "px-2 py-2 text-white font-bold hover:border-b-3 hover:border-fuchsia-800 transition duration-200"
              }
            >
              {list.name}
            </NavLink>
          ))}
        </div>
        <a href={resume} download className="hidden md:block justify-between">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "gray" },
            }}
          >
            Download Resume
          </Button>
        </a>
        <div className="md:hidden justify-end ">
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </div>

        {/* Mobile menu bar */}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          className="md:hidden "
          data-aos="fade-right"
        >
          <div className="w-60 p-4 bg-gray-900 h-full flex flex-col gap-5">
            {navList.map((list, index) => (
              <NavLink
                key={index}
                to={list.href}
                onClick={toggleDrawer}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold border-b-4 border-fuchsia-900"
                    : "text-white font-bold hover:border-b-4 hover:border-fuchsia-800"
                }
              >
                {list.name}
              </NavLink>
            ))}
            {/* Resume button in drawer */}
            <a href={resume} download>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { backgroundColor: "gray" },
                  mt: "auto",
                }}
                fullWidth
              >
                Download Resume
              </Button>
            </a>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
