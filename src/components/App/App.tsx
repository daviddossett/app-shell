import React from 'react';
import { Page } from '../Page/Page';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { palette } from '../../constants/theme';
import { BrowserRouter as Router } from 'react-router-dom';

initializeIcons();
loadTheme({palette});

const App: React.FC = () => {
  return (
    <Router basename ="/app-shell">>
      <Page />
    </Router>
  );
}

export default App;