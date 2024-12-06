interface ISearchTitle {
    title?: string;
}
  
const SearchTitle = ({title = 'Wyszukiwarka krajów'}: ISearchTitle) => {
    return <h1 className="text-2xl">{title}</h1>;
}
  
export default SearchTitle;
  