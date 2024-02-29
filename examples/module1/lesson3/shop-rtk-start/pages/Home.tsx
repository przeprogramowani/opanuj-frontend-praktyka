import React from 'react';
import { useContext } from 'react';
import Product from '../components/Product';
import { useGetProductsQuery } from '../services/Product';

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <section className="py-20">
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-10 text-center">
              Explore Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {data.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Home;
