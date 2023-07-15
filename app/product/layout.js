import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=5");
  if (!res.ok) {
    throw new Error("Failed fetch data");
  }
  return res.json();
}

export default async function Layout({ children }) {
  const { products } = await getData();
  return (
    <>
      <h1>Product Page</h1>
      {products.map((product) => {
        return (
          <div className="border-8 my-2 px-2">
            <Link href={`/product/${product.id}`}>
              No.{product.id} {product.title}
            </Link>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </div>
        );
      })}
      <div>{children}</div>
    </>
  );
}
