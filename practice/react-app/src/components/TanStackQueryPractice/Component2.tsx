import { useArticlesQuery } from '../../hooks/useArticlesQuery';
import { useMutationQuery } from '../../hooks/useMutationQuery';

function Component2() {
  const { isPending, error, data } = useArticlesQuery();
  const mutation = useMutationQuery();

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
        <button onClick={() => console.log(mutation.mutate())}>Add</button>
        {mutation.isPending && <div>ADDING...</div>}
        {mutation.isError && <div>ERROR</div>}
        {mutation.isSuccess && <div>SUCCES</div>}
      </div>
    </>
  );
}

export default Component2;
