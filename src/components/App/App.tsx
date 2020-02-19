import React from 'react';
import { Page } from '../Page/Page';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { light } from '../../constants/theme';
import { BrowserRouter as Router } from 'react-router-dom';

initializeIcons();
loadTheme(light);

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Page />
    </Router>
  );
}

export default App;