import { getClassNames } from './Queries.styles';
import { IQueriesProps } from './Queries.types';
import React from 'react';
import { CommandBar } from 'office-ui-fabric-react';
import { PageHeader } from '../../components/PageHeader/PageHeader';

const items = [
  {
    key: 'new',
    name: 'New query',
    iconProps: { iconName: 'Add' },
    ariaLabel: 'New',
  },
  {
    key: 'time-range',
    name: 'Last week',
    iconProps: { iconName: 'Calendar' },
    subMenuProps: {
      items: [
        {
          key: 'new',
          name: 'New query',
          iconProps: { iconName: 'Add' },
          ariaLabel: 'New'
        },
        {
          key: 'new',
          name: 'New query',
          iconProps: { iconName: 'Add' },
          ariaLabel: 'New'
        },
        {
          key: 'new',
          name: 'New query',
          iconProps: { iconName: 'Add' },
          ariaLabel: 'New'
        },
      ]
    }
  },
  {
    key: 'interval',
    name: 'Daily',
    iconProps: { iconName: 'Clock' },
    subMenuProps: {
      items: [
        {
          key: 'new',
          name: 'New query',
          iconProps: { iconName: 'Add' },
          ariaLabel: 'New'
        },
        {
          key: 'new',
          name: 'New query',
          iconProps: { iconName: 'Add' },
          ariaLabel: 'New'
        },
        {
          key: 'new',
          name: 'New query',
          iconProps: { iconName: 'Add' },
          ariaLabel: 'New'
        },
      ]
    }
  },
];

const farItems = [
  {
    key: 'favorite',
    name: 'Favorite',
    ariaLabel: 'Favorite this page',
    iconProps: {
      iconName: 'FavoriteStar'
    },
    iconOnly: true,
    onClick: () => console.log('Favorited')
  },
  {
    key: 'share',
    name: 'Share',
    ariaLabel: 'Share this page',
    iconProps: {
      iconName: 'Share'
    },
    iconOnly: true,
    onClick: () => console.log('Shared')
  },
  {
    key: 'full-screen',
    name: 'Full screen',
    ariaLabel: 'Expand the page to show in a full screen view',
    iconProps: {
      iconName: 'FullScreen'
    },
    iconOnly: true,
    onClick: () => console.log('Opened full screen')
  }
];

export const QueriesBase: React.FC<IQueriesProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <CommandBar 
        items={items}
        farItems={farItems}
        ariaLabel={'Use left and right arrow keys to navigate between commands'}
        className={classNames.commandBar}
      />
    <div className={classNames.content}>
      <PageHeader text={'Queries'}/>
    </div>
  </div>
  );
}