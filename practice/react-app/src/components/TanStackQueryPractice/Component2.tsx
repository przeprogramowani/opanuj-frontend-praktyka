import { useArticlesQuery } from '../../hooks/useArticlesQuery';

function Component2() {
  const { isPending, error, data } = useArticlesQuery();

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div style={{ width: '100vw', margin: '50px' }}>
        <h3>Component 1</h3>
        <div style={{ width: '100%' }}>
          {data.map((item) => (
            <li key={item.id}>{item.author}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Component2;
