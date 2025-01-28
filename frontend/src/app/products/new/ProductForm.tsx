"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { createProduct, updateProduct } from "../products.api";

const ProductForm = ({ initialValues }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      ...initialValues,
    },
  });
  const router = useRouter();
  const params = useParams();

  const handleProductForm = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, {
        ...data,
        price: parseFloat(data.price),
      });
    } else {
      await createProduct({ ...data, price: parseFloat(data.price) });
    }
    router.push("/");
  });

  const handleCancel = () => {
    reset();
    window.history.back();
  };

  return (
    <form onSubmit={handleProductForm}>
      <CardContent>
        <Label>Product Name</Label>
        <Input {...register("name")} />

        <Label>Description</Label>
        <Input {...register("description")} />

        <Label>Price</Label>
        <Input {...register("price")} />

        <Label>Image</Label>
        <Input {...register("image")} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit">{params.id ? "Save" : "Add"}</Button>
      </CardFooter>
    </form>
  );
};

export default ProductForm;
