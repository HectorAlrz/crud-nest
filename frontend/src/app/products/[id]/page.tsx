import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export default async function ProductDetail({ params }: ProductDetailsProps) {
  const product = await getProduct(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            {product.name}
            <Link href="/" className={buttonVariants()}>
              Regresar
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
}
