import { useEffect } from 'react';
import Product from '../components/Product';
import { useAppDispatch } from '../hooks/rtk';
import { getProductsAsync } from '../state/productSlice';
import {
  useProducts,
  useProductsError,
  useProductsLoading,
} from '../hooks/productSelectors';

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useProducts();
  const loading = useProductsLoading();
  const error = useProductsError();

  useEffect(() => {
    void dispatch(getProductsAsync());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
