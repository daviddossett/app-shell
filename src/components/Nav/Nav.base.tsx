import React from 'react';
import { Sidebar } from '@business-app/fabric/lib';
import { INavProps } from './Nav.types';
import { getClassNames } from './Nav.styles';
import { getTheme } from 'office-ui-fabric-react';

let sideBarItems = [
  {
    key: 'collapsible-example-item1',
    name: 'Home',
    iconProps: { iconName: 'Home' },
    active: true,
  },
  {
    key: 'collapsible-example-item2',
    name: 'Queries',
    iconProps: { iconName: 'LineChart' },
    active: false
  },
  {
    key: 'collapsible-example-item2',
    name: 'Reports',
    iconProps: { iconName: 'ViewDashboard' },
    active: false
  },
];

let sidebarFooterItems = [
  {
    key: 'collapsible-example-item2',
    name: 'Settings',
    iconProps: { iconName: 'Settings' },
    active: false
  },
];


export const Nav: React.FC<INavProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme });

  return (
    <div className={classNames.root}>
      <Sidebar 
        theme={getTheme()}
        id={'sidebar-collapsed'}
        collapsible={true}
        defaultIsCollapsed={false}
        items={sideBarItems}
        footerItems={sidebarFooterItems}
      />
    </div>
  );
}
