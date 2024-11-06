import { useArticlesQuery } from '../../hooks/useArticlesQuery';
import { useMutationQuery } from '../../hooks/useMutationQuery';
import Placeholder from './Placeholder';

function Component2() {
  const { isPending, error, data } = useArticlesQuery();
  const mutation = useMutationQuery();

  if (isPending) return <Placeholder lines={1} height={354} />;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="bg-gray-800 text-white p-2 flex flex-col gap-4">
        <h3>Component 2</h3>
        <div>
          {data.map((item) => (
            <li key={item.id}>{item.author}</li>
          ))}
        </div>
        <button
          className="border border-gray-100 py-2 px-5 rounded-lg "
          onClick={() => console.log(mutation.mutate())}
        >
          Add
        </button>
        {mutation.isPending && <div>ADDING...</div>}
        {mutation.isError && <div>ERROR</div>}
        {mutation.isSuccess && <div>SUCCES</div>}
      </div>
    </>
  );
}

export default Component2;
