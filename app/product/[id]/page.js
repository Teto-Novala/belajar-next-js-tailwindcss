import Image from "next/image";

async function getDetailProduct(id) {
  const detailProduct = await fetch(`https://dummyjson.com/products/${id}`);
  return detailProduct.json();
}

export default async function ProductID({ params }) {
  const data = await getDetailProduct(params.id);
  console.log(data);
  return (
    <div>
      <Image src={data.thumbnail} width={200} height={200} />
      <h1>{data.title}</h1>
      <p>brand: {data.brand}</p>
      <p>rating: {data.rating}</p>
      <p>stock: {data.stock}</p>
      <p>kategori: {data.category}</p>
    </div>
  );
}
