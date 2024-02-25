function SearchTitle({ title = "Wyszukiwarka postaci Rick and Morty" }: { title?: string }) {
  return <h1 className="text-2xl">{title}</h1>;
}

export default SearchTitle;
