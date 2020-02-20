import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, ISidebarItemProps } from '@business-app/fabric/lib';
import { INavProps } from './Nav.types';
import { getTheme, Overlay, Layer } from 'office-ui-fabric-react';
import { getClassNames } from './Nav.styles';

export const NavBase: React.FC<INavProps> = (props) => {
  const { styles, isNavOverlay, toggleNav } = props;
  const classNames = getClassNames(styles);
  const history = useHistory();

  const navigateToPath = (path: string) => {
    history.push(path);
  }

  const handleClick = (ev: any, item: any) => {
    const setItemToActive = (listItem: any) => {
      return {
        ...listItem,
        active: listItem.key === item.key
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
    console.log('Ass')
    navigateToPath(`/${item.key}`);
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
          key: 'data/signals',
          name: 'Signals',
          active: false,
          onClick: handleClick
        },
        {
          key: 'data/sources',
          name: 'Sources',
          active: false,
          onClick: handleClick
        },
        {
          key: 'data/metrics',
          name: 'Metrics',
          active: false,
          onClick: handleClick
        },
        {
          key: 'data/segments',
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
          key: 'settings/basics',
          name: 'Basics',
          active: false,
          onClick: handleClick
        },
        {
          key: 'settings/billing',
          name: 'Billing',
          active: false,
          onClick: handleClick
        },
        {
          key: 'settings/members',
          name: 'Members',
          active: false,
          onClick: handleClick
        },
      ]
    }
  ];

  const [listItems, setListItems] = useState(navListItems);

  return (
    <>
      {(isNavOverlay && 
        <>
          <Layer>
            <Sidebar items={listItems} theme={getTheme()} collapsible={false} className={classNames.overlaySidebar} />
            <Overlay onClick={toggleNav} isDarkThemed={true} className={classNames.overlay} />
          </Layer>
        </>
      )}
      <Sidebar items={listItems} theme={getTheme()} collapsible={true} />
    </>
  );
}