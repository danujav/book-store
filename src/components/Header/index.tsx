"use client";

import {
  Autocomplete,
  Group,
  Burger,
  rem,
  Image,
  ActionIcon,
  Flex,
  Badge,
  Grid,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import {
  IconShoppingCart,
  IconHome2,
  IconAdjustments,
  IconSearch,
} from "@tabler/icons-react";
import { NavLink } from "@mantine/core";
import BookShopLogo from "../../../public/BookShopLogo.png";
import NextImage from "next/image";
import Link from "next/link";
import { MantineLogo } from "@mantinex/mantine-logo";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname()


  return (
    <header className="bg-white text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section - Icon */}
        <div className="text-2xl text-teal-700 font-bold">
          <i className="fa-solid fa-book"></i>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            component={Link}
            href="/"
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            variant="filled"
            active={pathname == '/'}

          />
          <NavLink
            component={Link}
            href="cart"
            label="Cart"
            leftSection={<IconShoppingCart size="1rem" stroke={1.5} />}
            rightSection={
              <Badge size="xs" color="red" circle>
                3
              </Badge>
            }
            variant="filled"
            active={pathname == '/cart'}
          />
        </div>

        <div className="hidden md:flex space-x-4">
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} />}
            placeholder="Search book by authr or title"
            value={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            // w={300}
          />
        </div>

        {/* Mobile Menu Button (if needed) */}
        {/* <div className="md:hidden">
          <button
            className="text-teal-700 hover:text-teal-500 focus:outline-none"
            onClick={() => console.log('Toggle mobile menu')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
    </header>
  );
}
