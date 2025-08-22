export default async function ProductDetails({ params }: { params: { id: string } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    const products = await res.json();
    const product = products.find((p: any) => p.id === params.id);
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  }
  