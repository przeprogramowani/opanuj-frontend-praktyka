interface ISearchTitle {
  title: string;
}

function SearchTitle({title}: ISearchTitle) {
  return <h1 className="text-2xl">Wyszukiwarka postaci {title}</h1>;
}

export default SearchTitle;
