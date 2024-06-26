interface SearchTitleProps {
  title?: string;
}

function SearchTitle({ title = 'Rick and Morty' }: SearchTitleProps) {
  return <h1 className="text-2xl">Wyszukiwarka postaci {title}</h1>;
}

export default SearchTitle;
