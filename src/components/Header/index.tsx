"use client";

import {
  rem,
  Badge,
  TextInput,
  Button,
  Group,
  Text,
  Grid,
  Card as MagniteCard,
  Image,
  Divider,
} from "@mantine/core";
import { IconShoppingCart, IconHome2, IconSearch } from "@tabler/icons-react";
import { NavLink, Drawer } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCartStore } from "@/store/userCartStore";
import { useDisclosure } from "@mantine/hooks";
import path from "node:path/win32";
import { useSearchStore } from "@/store/useSearchStore";

export default function Header() {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);

  const { cartProducts } = useCartStore();
  const { searchValue, updateSearchValue } = useSearchStore();

  const tot = useMemo(() => {
    return cartProducts.reduce((sum, product) => sum + product.price, 0);
  }, [cartProducts]);

  return (
    <header className="text-gray-900 p-4 bg-white mb-10 shadow-md">
      <Grid>
        <Grid.Col span={4}>
          <Link href="/">
            <Button
              variant={`${pathname == "/" ? "filled" : "light"}`}
              size="md"
              radius="xs"
              leftSection={<i className="fa-solid fa-book"></i>}
            >
              Home
            </Button>
          </Link>
        </Grid.Col>
        <Grid.Col span={8}>
          <Group justify="flex-end">
            <TextInput
              leftSectionPointerEvents="none"
              leftSection={
                <IconSearch style={{ width: rem(16), height: rem(16) }} />
              }
              placeholder="Search book by authr or title"
              value={searchValue}
              onChange={(event) => updateSearchValue(event.currentTarget.value)}
            />
            <Button
              variant="light"
              color="orange"
              leftSection={<IconShoppingCart size={18} />}
              rightSection={
                <Badge size="lg" color="red" circle>
                  {cartProducts.length}
                </Badge>
              }
              onClick={open}
              disabled={pathname == "/cart" || pathname == "/checkout"}
            >
              Cart
            </Button>
            <Drawer
              offset={8}
              radius="md"
              opened={opened}
              onClose={close}
              title="Added to your cart"
              position="right"
            >
              <DrawerContent />
              <Grid>
                <Grid.Col span={8}>
                  <Text size="xl" fw={500}>
                    Cart Total:
                  </Text>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Group justify="flex-end">
                    <Text size="xl" fw={500}>
                      $ {tot.toFixed(2)}
                    </Text>
                  </Group>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span={12}>
                  <Link href="/cart">
                    <Button
                      fullWidth
                      variant="filled"
                      size="md"
                      radius="xs"
                      onClick={close}
                    >
                      View Your Cart
                    </Button>
                  </Link>
                </Grid.Col>
              </Grid>
            </Drawer>
          </Group>
        </Grid.Col>
      </Grid>
    </header>

    // <header className="bg-white text-gray-900 p-4 shadow-md">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="text-2xl text-teal-700 font-bold">
    //       <i className="fa-solid fa-book"></i>
    //     </div>

    //     <div className="hidden md:flex space-x-4">
    //       <NavLink
    //         component={Link}
    //         href="/"
    //         label="Home"
    //         leftSection={<IconHome2 size="1rem" stroke={1.5} />}
    //         variant="filled"
    //         active={pathname == "/"}
    //       />
    //       <Button
    //         variant="light"
    //         leftSection={<IconShoppingCart size={14} />}
    //         rightSection={
    //           <Badge size="lg" color="red" circle>
    //             {cartProducts.length}
    //           </Badge>
    //         }
    //         onClick={open}
    //         disabled={pathname == "/cart" || pathname == "/checkout"}
    //       >
    //         Cart
    //       </Button>
    //       <Drawer
    //         offset={8}
    //         radius="md"
    //         opened={opened}
    //         onClose={close}
    //         title="Added to your cart"
    //         position="right"
    //       >
    //         <DrawerContent />
    //         <Grid>
    //           <Grid.Col span={8}>
    //             <Text size="xl" fw={500}>
    //               Cart Total:
    //             </Text>
    //           </Grid.Col>
    //           <Grid.Col span={4}>
    //             <Group justify="flex-end">
    //               <Text size="xl" fw={500}>
    //                 $ {tot.toFixed(2)}
    //               </Text>
    //             </Group>
    //           </Grid.Col>
    //         </Grid>
    //         <Grid>
    //           <Grid.Col span={12}>
    //             <Link href="/cart">
    //               <Button
    //                 fullWidth
    //                 variant="filled"
    //                 size="md"
    //                 radius="xs"
    //                 onClick={close}
    //               >
    //                 View Your Cart
    //               </Button>
    //             </Link>
    //           </Grid.Col>
    //         </Grid>
    //       </Drawer>
    //     </div>

    //     <div className="hidden md:flex space-x-4">
    //       <TextInput
    //         leftSectionPointerEvents="none"
    //         leftSection={
    //           <IconSearch style={{ width: rem(16), height: rem(16) }} />
    //         }
    //         placeholder="Search book by authr or title"
    //         value={searchValue}
    //         onChange={(event) => updateSearchValue(event.currentTarget.value)}
    //         // w={300}
    //       />
    //     </div>

    //     <div className="md:hidden">
    //       <Button
    //         className="text-teal-700 hover:text-teal-500 focus:outline-none"
    //         onClick={() => console.log("Toggle mobile menu")}
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           ></path>
    //         </svg>
    //       </Button>
    //     </div>
    //   </div>
    // </header>
  );
}

function DrawerContent() {
  const { cartProducts } = useCartStore();

  const runningTotals = useMemo(() => {
    let total = 0;
    return cartProducts.map((product) => {
      total += product.price;
      return total;
    });
  }, [cartProducts]);

  return (
    <>
      {cartProducts.map((product, index) => (
        <>
          <Grid>
            <Grid.Col span={8}>
              <Grid>
                <Grid.Col span={4}>
                  <Image
                    src={product.image}
                    height={160}
                    alt={"No image preview"}
                  />
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text fw={450}>{product.title}</Text>
                  <Text size="sm" fw={400}>
                    $ {product.price}
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group justify="flex-end">
                <Text fw={400}>$ {runningTotals[index].toFixed(2)}</Text>
              </Group>
            </Grid.Col>
          </Grid>
          <Divider my="md" />
        </>
      ))}
    </>
  );
}
