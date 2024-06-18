type SearchTitleProps = { title: string };

function SearchTitle({ title }: SearchTitleProps) {
  return <h1 className="text-2xl">{ title }</h1>;
}

export default SearchTitle;
