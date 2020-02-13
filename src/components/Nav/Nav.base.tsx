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

  const navigateToPath = (path: string) => {
    history.push(path);
  }

  const matchNavListStateToPath = () => {

  }

  const handleClick = (ev: any, item: any) => {
    const setItemToActive = (listItem: any) => {
      return {
        ...listItem,
        active: listItem.key === item.key,
      }
    } 
    const newListItems = listItems.map(listItem => {
      const newListItem = setItemToActive(listItem);
      if (newListItem.items?.length) {
        newListItem.items = newListItem.items.map(setItemToActive)
      }
      return newListItem;
    });
    setListItems(newListItems);
    navigateToPath(`/${item.key}`)
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
      onClick: handleClick,
      items: [
        {
          key: 'signals',
          name: 'Signals',
          active: false,
          onClick: handleClick
        },
        {
          key: 'sources',
          name: 'Sources',
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
        }
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

  const [listItems, setListItems] = useState(navListItems); 

  return (
    <div className={classNames.root}>
      <Sidebar 
        theme={getTheme()}
        id={'Navigation sidebar'}
        collapsible={true}
        defaultIsCollapsed={false}
        collapseButtonAriaLabel={'Navigation menu'}
        items={listItems}
      />
    </div>
  );
}