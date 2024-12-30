/* eslint-disable react/prop-types */

import { Link, useMatch, useResolvedPath } from "react-router";

import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineFlag,
  AiFillFlag,
} from "react-icons/ai";
import { MdOutlineScoreboard, MdScoreboard } from "react-icons/md";
import { RiBook2Fill, RiBook2Line } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";

const Nav = () => {
  //
  const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <Link
        to={to}
        {...props}
        className="text-primary flex flex-col items-center text-2xl"
      >
        {match ? props.active_icon : props.passive_icon}
        <span className="text-xs">{children}</span>
      </Link>
    );
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme == "light") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <footer className="w-full absolute bottom-0 bg-base h-20 border-t border-primary">
      <ul className="h-full flex items-center place-content-around text-xs pb-4">
        <li>
          <CustomLink
            to="/"
            active_icon={<AiFillHome />}
            passive_icon={<AiOutlineHome />}
          >
            <span>Home</span>
          </CustomLink>
        </li>

        <li>
          <CustomLink
            to="./match"
            active_icon={<AiFillFlag />}
            passive_icon={<AiOutlineFlag />}
          >
            <span>Match</span>
          </CustomLink>
        </li>

        <li>
          <div
            className="flex flex-col items-center text-primary"
            onClick={toggleTheme}
          >
            <CgDarkMode className="text-2xl" />
            <span>Theme</span>
          </div>
        </li>

        <li>
          <CustomLink
            to="./rules"
            active_icon={<RiBook2Fill />}
            passive_icon={<RiBook2Line />}
          >
            <span>Rules</span>
          </CustomLink>
        </li>

        <li>
          <CustomLink
            to="./score"
            active_icon={<MdScoreboard />}
            passive_icon={<MdOutlineScoreboard />}
          >
            <span>Score</span>
          </CustomLink>
        </li>
      </ul>
    </footer>
  );
};

export default Nav;
