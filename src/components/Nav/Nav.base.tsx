import React, { useState } from 'react';
import { getTheme } from 'office-ui-fabric-react';
import { useHistory } from 'react-router-dom';
import { Sidebar, ISidebarItemProps } from '@business-app/fabric/lib';
import { INavProps } from './Nav.types';
import { getClassNames } from './Nav.styles';

export const NavBase: React.FC<INavProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme });
  const history = useHistory();

  const handleNavigation = (path: string) => {
    history.push(path);
  }

  const handleClick = (ev: any, item: any) => {
    const newItems = items.map(currentItem => {
      if (currentItem.key === item.key) {
        return {
          ...currentItem,
          active: true
        }
      }
      return {
        ...currentItem,
        active: false
      };
    });
    setItems(newItems);
    handleNavigation(`/${item.key}`)
  }

  const navListItems: ISidebarItemProps[] = [
    {
      key: 'home',
      name: 'Home',
      iconProps: { iconName: 'Home' },
      active: true,
      onClick: handleClick
    },
    {
      key: 'queries',
      name: 'Queries',
      iconProps: { iconName: 'LineChart' },
      active: false,
      onClick: handleClick
    },
    {
      key: 'reports',
      name: 'Reports',
      iconProps: { iconName: 'ViewDashboard' },
      active: false,
      onClick: handleClick
    },
    {
      key: 'data',
      name: 'Data',
      iconProps: { iconName: 'Database' },
      active: false,
      onClick: handleClick
    },
    {
      key: 'settings',
      name: 'Settings',
      iconProps: { iconName: 'Settings' },
      active: false,
      onClick: handleClick
    }
  ];

  const [items, setItems] = useState(navListItems); 

  return (
    <div className={classNames.root}>
      <Sidebar 
        theme={getTheme()}
        id={'Navigation sidebar'}
        collapsible={true}
        defaultIsCollapsed={false}
        collapseButtonAriaLabel={'Navigation menu'}
        items={items}
      />
    </div>
  );
}