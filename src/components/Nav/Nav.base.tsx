import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, ISidebarItemProps, } from '@business-app/fabric/lib';
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
    navigateToPath(`/${item.key}`);
    if (isNavOverlay === true) {
      toggleNav();
    }
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
      iconProps: { iconName: 'PreviewLink' },
      active: false,
      onClick: handleClick,
      items: [
        {
          key: 'reports/key-metrics',
          name: 'Key metrics',
          active: false,
          onClick: handleClick
        },
        {
          key: 'reports/content',
          name: 'Content',
          active: false,
          onClick: handleClick
        },
        {
          key: 'reports/traffic-sources',
          name: 'Traffic sources',
          active: false,
          onClick: handleClick
        },
        {
          key: 'reports/visitor-profile',
          name: 'Visitor profile',
          active: false,
          onClick: handleClick
        },
        {
          key: 'reports/paths',
          name: 'Paths',
          active: false,
          onClick: handleClick
        },
        {
          key: 'reports/custom',
          name: 'Custom',
          active: false,
          onClick: handleClick
        },
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