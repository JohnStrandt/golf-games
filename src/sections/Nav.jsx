import { Link, useMatch, useResolvedPath } from "react-router";

import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineFlag,
  AiFillFlag,
} from "react-icons/ai";
import { MdOutlineScoreboard, MdScoreboard } from "react-icons/md";
import { RiBook2Fill, RiBook2Line } from "react-icons/ri";

const Nav = () => {
  /* eslint-disable react/prop-types */
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <Link to={to} {...props}>
        {match ? props.active_icon : props.passive_icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <footer className="w-full absolute bottom-0 bg-sky-100 h-20">
      <ul className="h-full flex items-center place-content-around text-xs pb-4">
        <li className="flex flex-col items-center">
          <CustomLink
            to="/"
            active_icon={<AiFillHome className="text-2xl" />}
            passive_icon={<AiOutlineHome className="text-2xl" />}
          >
            <span>Home</span>
          </CustomLink>
        </li>

        <li className="flex flex-col items-center">
          <CustomLink
            to="./match"
            active_icon={<AiFillFlag className="text-2xl" />}
            passive_icon={<AiOutlineFlag className="text-2xl" />}
          >
            <span>Match</span>
          </CustomLink>
        </li>

        <li className="flex flex-col items-center">
          <CustomLink
            to="./rules"
            active_icon={<RiBook2Fill className="text-2xl" />}
            passive_icon={<RiBook2Line className="text-2xl" />}
          >
            <span>Rules</span>
          </CustomLink>
        </li>

        <li className="flex flex-col items-center">
          <CustomLink
            to="./score"
            active_icon={<MdScoreboard className="text-2xl" />}
            passive_icon={<MdOutlineScoreboard className="text-2xl" />}
          >
            <span>Score</span>
          </CustomLink>
        </li>
      </ul>
    </footer>
  );
};

export default Nav;
