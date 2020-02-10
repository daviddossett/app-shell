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
      key: 'reports',
      name: 'Reports',
      iconProps: { iconName: 'ViewDashboard' },
      active: false,
      onClick: handleClick,
      items: [
        {
          key: 'key-metrics',
          name: 'Key metrics',
          active: false,
          onClick: handleClick
        },
        {
          key: 'active-users',
          name: 'Active users',
          active: false,
          onClick: handleClick
        },
        {
          key: 'page-timings',
          name: 'Page timings',
          active: false,
          onClick: handleClick
        }
      ]
    },
    {
      key: 'data',
      name: 'Data',
      iconProps: { iconName: 'Database' },
      active: false,
      onClick: handleClick,
      items: [
        {
          key: 'events',
          name: 'Events',
          active: false,
          onClick: handleClick
        },
        {
          key: 'metrics',
          name: 'Metrics',
          active: false,
          onClick: handleClick
        },
        {
          key: 'segments',
          name: 'Segments',
          active: false,
          onClick: handleClick
        },
        {
          key: 'enrichment',
          name: 'Enrichment',
          active: false,
          onClick: handleClick
        },
      ]
    },
    {
      key: 'settings',
      name: 'Settings',
      iconProps: { iconName: 'Settings' },
      active: false,
      onClick: handleClick,
      items: [
        {
          key: 'basics',
          name: 'Basics',
          active: false,
          onClick: handleClick
        },
        {
          key: 'billing',
          name: 'Billing',
          active: false,
          onClick: handleClick
        },
        {
          key: 'members',
          name: 'Members',
          active: false,
          onClick: handleClick
        },
      ]
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