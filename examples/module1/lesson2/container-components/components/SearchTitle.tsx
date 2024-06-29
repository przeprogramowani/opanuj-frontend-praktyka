type SearchTitleProps = { name: string };

export const SearchTitle = ({ name }: SearchTitleProps) => (
  <h1 className="pt-20 pb-8 text-2xl">Character finder {name}</h1>
);
