import { CountrySearchTitle } from '../components/CountrySearchTitle.tsx';
import { CountryNameInbox } from '../components/CountryNameInbox.tsx';

export const CountrySearchContainer = () => {
  return (<>
    <div className="pt-24" />
    <CountrySearchTitle />
    <CountryNameInbox />
  </>);
};