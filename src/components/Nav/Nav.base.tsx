import React, { useState } from 'react';
import { Sidebar, ISidebarItemProps } from '@business-app/fabric/lib';
import { INavProps } from './Nav.types';
import { getClassNames } from './Nav.styles';
import { getTheme } from 'office-ui-fabric-react';


export const NavBase: React.FC<INavProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme });

  const handleClick = (ev: any, item: any) => {
    const newItems = items.map(currentItem => {
      if (currentItem.key === item.key) {
        return {
          ...currentItem,
          active: true,
          href: item.href
        }
      }
      return {
        ...currentItem,
        active: false
      };
    });
    setItems(newItems);
  }

  let initialItems: Array<ISidebarItemProps> = [
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
      onClick: handleClick,
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
  
  const [items, setItems] = useState(initialItems)

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