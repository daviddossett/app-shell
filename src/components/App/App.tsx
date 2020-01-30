import React from 'react';
import { Page } from '../Page/Page';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

const App: React.FC = () => {
  return (
      <Page />
  );
}

export default App;