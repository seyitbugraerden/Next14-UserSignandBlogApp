import Link from "next/link";
import React from "react";
import logout from "@/public/logout.svg";
import Image from "next/image";
import { header } from "../../types/header";

const HeaderItem: React.FC<header> = ({ item }) => {
  return (
    <li>
      {item.title === "User" ? (
        <Image src={logout} alt="Log Out" height={30} className="hover:opacity-50 transiiton duration-300 cursor-pointer"/>
      ) : (
        <Link
          href={`${item.link}`}
          className="no-underline text-white hover:opacity-70 duration-500"
          aria-label="Homepage"
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default HeaderItem;
