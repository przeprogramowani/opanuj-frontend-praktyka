import Button from './Button';

import { useClients } from './http-libraries/useClients';

const App = () => {
  const { fetchUsingExternalClient, fetchUsingInternalClient } = useClients();

  return (
    <div className="flex flex-col space-y-4">
      <Button
        label="Scenariusz 1 - Klient zewnętrzny"
        handler={fetchUsingExternalClient}
      ></Button>
      <Button
        label="Scenariusz 2 - Klient wewnętrzny"
        handler={fetchUsingInternalClient}
      ></Button>
    </div>
  );
};

export default App;
