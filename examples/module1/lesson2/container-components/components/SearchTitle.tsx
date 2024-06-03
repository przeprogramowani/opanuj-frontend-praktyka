type TitleProps = {
    title: string;
};

const SearchTitle: React.FC<TitleProps> = ({ title }) => {
    return <h1 className="text-2xl">{title}</h1>;
};

export default SearchTitle;
