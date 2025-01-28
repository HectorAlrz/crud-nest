import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "./ProductForm";
import { getProduct } from "../products.api";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function ProductNewPage({ params }: ProductProps) {
  const productToEdit = await getProduct(params.id);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {params.id ? "Update Product" : "Create Product"}
          </CardTitle>
          <CardDescription>Add a new product</CardDescription>
        </CardHeader>
        <ProductForm initialValues={productToEdit} />
      </Card>
    </div>
  );
}
