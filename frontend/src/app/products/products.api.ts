export async function getProducts() {
  const response = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export async function getProduct(id: string) {
  const response = await fetch(`http://localhost:4000/api/products/${id}`);
  const data = await response.json();
  return data;
}

export async function createProduct(productData: any) {
  const response = await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await response.json();
  console.log(data);
}

export async function updateProduct(id: any, data: any) {
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function deleteProduct(id: string) {
  const response = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}
