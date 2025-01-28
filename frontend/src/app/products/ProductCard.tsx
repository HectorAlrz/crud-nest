"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteProduct } from "./products.api";

function ProductCard({ product }: any) {
  const router = useRouter();
  const handleRemoveProduct = async (id: string) => {
    await deleteProduct(id);
    router.refresh();
  };

  return (
    <Card
      key={product.id}
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <p className="text-sm font-bold text-gray-500">${product.price}</p>
        </CardTitle>
      </CardHeader>

      <div className="h-48 overflow-hidden">
        <img src={product.image} alt={product.name} />
      </div>

      <CardContent className="flex-grow mt-2">
        <p>{product.description}</p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Editar
        </Button>
        <Button
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveProduct(product.id);
          }}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
