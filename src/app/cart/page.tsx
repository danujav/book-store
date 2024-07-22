"use client";

import { useCartStore } from "@/store/userCartStore";
import { Button, Grid, Image, Text, Table, TableData } from "@mantine/core";
import { useEffect, useMemo } from "react";

export default function Cart() {
  const { cartProducts, removeFromCart, clearAllItems } = useCartStore();
  const runningTotals = useMemo(() => {
    let total = 0;
    return cartProducts.map((product) => {
      total += product.price;
      return total;
    });
  }, [cartProducts]);

  const tableData: TableData = {
    caption: "Items in your cart",
    head: ["Item", "Price", "Quantity", "Sub Total"],
    body: cartProducts.map((product, index) => [
      <Grid key={index}>
        <Grid.Col span={4}>
          <Image src={product.image} height={10} alt={"No image preview"} />
        </Grid.Col>
        <Grid.Col span={8}>
          <Text fw={450}>{product.title}</Text>
          <Text className="mt-3" fw={400}>
            {product.subtitle}
          </Text>
          <Text size="sm" className="mt-3" fw={350}>
            Author: {product.author}
          </Text>
          <Text size="sm" fw={350}>
            Category: {product.category}
          </Text>
        </Grid.Col>
      </Grid>,
      product.price.toFixed(2),
      2,
      runningTotals[index].toFixed(2),
    ]),
  };

  return (
    <Grid className="m-10">
      <Grid.Col span={8}>
        <Table
          striped
          highlightOnHover
          withRowBorders
          data={tableData}
          withTableBorder
        />
        {/* {cartProducts.map((product, index) => (
          <Grid key={index}>
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
        ))} */}
      </Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
    </Grid>
    // <div className="row gap-4 p-5">
    //   <div className="grid grid-cols-2 ml-5 mr-5">
    //     <p className="text-3xl">Products in cart...</p>
    //     <div className="flex justify-end">
    //       {cartProducts.length > 0 && (
    //         <Button
    //           color="blue"
    //           fullWidth
    //           mt="md"
    //           radius="xs"
    //           onClick={() => {
    //             clearAllItems;
    //           }}
    //         >
    //           PROCEED TO CHECKOUT
    //         </Button>
    //       )}
    //     </div>
    //   </div>

    //   {cartProducts.map((product) => (
    //     <div
    //       key={product.id}
    //       className="card m-5 p-5 bg-slate-200 shadow-lg overflow-hidden hover:shadow-xl hover:bg-slate-300 transition-all duration-300"
    //     >
    //       <div className="grid grid-cols-2">
    //         <div className="flex flex-row">
    //           <img
    //             src={product.image}
    //             alt={"No Image Preview Available"}
    //             className="m-5 mt-8 w-40 h-28 object-cover"
    //           />
    //           <div className="pl-5 flex flex-col max-w-96 p-3">
    //             <h2 className="text-xl font-semibold text-teal-950">
    //               {product.title}
    //             </h2>
    //             <div className="min-h-20">
    //               <p className="text-teal-900">{product.subtitle}</p>
    //             </div>

    //             <div className="mt-4 text-lg font-bold text-red-950">
    //               ${product.price}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-row-reverse">
    //           <i
    //             onClick={() => removeFromCart(product.id)}
    //             className="hover:text-red-700 hover:cursor-pointer fa-regular fa-rectangle-xmark text-2xl text-black"
    //           ></i>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //   {/* {cartProducts.length == 0 && (
    //     <div className="h-screen flex justify-center">
    //       <div className="bg-slate-50 shadow-lg overflow-hidden flex flex-col items-center h-96 w-1/2">
    //         <p className="m-5 text-3xl">Empty cart...</p>
    //         <img
    //           alt="empty photo"
    //           src={EmptyCart}
    //           className=" w-1/2 h-60 object-cover"
    //         />
    //       </div>
    //     </div>
    //   )} */}
    // </div>
  );
}
