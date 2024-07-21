"use client";

import { rem, Badge, TextInput } from "@mantine/core";
import { IconShoppingCart, IconHome2, IconSearch } from "@tabler/icons-react";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/store/store";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();
  const { cartProductIds } = useCartStore();

  return (
    <header className="bg-white text-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-teal-700 font-bold">
          <i className="fa-solid fa-book"></i>
        </div>

        <div className="hidden md:flex space-x-4">
          <NavLink
            component={Link}
            href="/"
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            variant="filled"
            active={pathname == "/"}
          />
          <NavLink
            component={Link}
            href="cart"
            label="Cart"
            leftSection={<IconShoppingCart size="1rem" stroke={1.5} />}
            rightSection={
              <Badge size="lg" color="red" circle>
                {cartProductIds.length}
              </Badge>
            }
            variant="filled"
            active={pathname == "/cart"}
          />
        </div>

        <div className="hidden md:flex space-x-4">
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={
              <IconSearch style={{ width: rem(16), height: rem(16) }} />
            }
            placeholder="Search book by authr or title"
            value={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            // w={300}
          />
        </div>

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
