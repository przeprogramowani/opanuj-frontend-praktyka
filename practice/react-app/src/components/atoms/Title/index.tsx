import { memo } from 'react';

type SearchTitleType = {
  title: string;
};

export const Title = memo<SearchTitleType>(({ title }) => {
  return <h1 className="text-2xl my-4">{title}</h1>;
});

export default Title;
