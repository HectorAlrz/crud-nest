import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import ProductCard from "./products/ProductCard";

export const dynamic = "force-dynamic";

async function HomePage() {
  const productsList = await getProducts();

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-bold">NextNestApp</h1>
        <Link href="/products/new" className={buttonVariants()}>
          Create Product
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {productsList.map((product: any) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default HomePage;
