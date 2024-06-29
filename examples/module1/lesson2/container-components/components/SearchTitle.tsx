type SearchTitleProps = { title: string };

export const SearchTitle = ({ title }: SearchTitleProps) => (
  <h1 className="pt-20 pb-8 text-2xl">{title}</h1>
);
