import { useAuthors } from './hooks/useAuthors';

const DataList = () => {
  const { data: authors, isLoading, error } = useAuthors();

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <b>Error loading authors: </b>
        {error.message}
      </div>
    );

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors?.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
