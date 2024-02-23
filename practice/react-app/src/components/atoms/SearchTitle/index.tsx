import { memo } from 'react';

type SearchTitleType = {
  title: string;
};

export const SearchTitle = memo<SearchTitleType>(({ title }) => {
  return <h1 className="text-2xl">{title}</h1>;
});

export default SearchTitle;
