import { useAddAuthor, useAuthors } from './hooks/useAuthors';

const AuthorsList = () => {
  const { data: authors } = useAuthors();
  const mutation = useAddAuthor();

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate({
            id: 8,
            name: 'Marcin Świetlicki',
            comments: 5,
            articles: 2,
          });
        }}
      >
        Dodaj Marcina
      </button>
      <div>
        <h1>Authors</h1>
        <ul>
          {authors?.map((author) => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorsList;
