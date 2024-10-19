import Product from '../components/Product';

import { Product as ProductType } from '../types/Product';
import { useGetProductsQuery } from '../services/products';

const Home = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching products.</div>;
  }

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products &&
              products.map((product: ProductType) => (
                <Product product={product} key={product.id} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
