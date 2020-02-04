import React from 'react';
import { Page } from '../Page/Page';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { palette } from '../../constants/theme';

initializeIcons();
loadTheme({palette});

const App: React.FC = () => {
  return (
    <Page />
  );
}

export default App;