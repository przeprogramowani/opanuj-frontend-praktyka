import { useArticlesQuery } from '../../hooks/useArticlesQuery';
import { useMutationQuery } from '../../hooks/useMutationQuery';
import Placeholder from './Placeholder';

function Component1() {
  const { isPending, error, data } = useArticlesQuery();
  const mutation = useMutationQuery();

  if (isPending) return <Placeholder lines={1} height={354} />;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="bg-gray-600 text-white p-2 flex flex-col gap-4 mb-10">
        <h3>Component 1</h3>
        <div>
          {data.map((item) => (
            <li key={item.id}>{item.author}</li>
          ))}
        </div>
        <button
          className="border border-gray-100 py-2 px-5 rounded-lg "
          onClick={() => mutation.mutate()}
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

export default Component1;
