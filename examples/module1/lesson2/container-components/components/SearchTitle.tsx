type SearchTitleProps = { title: string };

export const SearchTitle = ({ title }: SearchTitleProps) => (
  <h1 className="text-2xl">{title}</h1>
);
