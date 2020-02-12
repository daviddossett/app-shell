import { getClassNames } from './Reports.styles';
import { IReportsProps } from './Reports.types';
import React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Card } from '../../components/Card/Card';
import { CommandBar } from 'office-ui-fabric-react';

export const ReportsBase: React.FC<IReportsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  const items = [
    {
      key: 'time-range',
      name: 'Last week',
      iconProps: { iconName: 'Calendar' },
      subMenuProps: {
        items: [
          {
            key: 'new',
            name: 'Last year',
            iconProps: { iconName: 'Calendar' },
            ariaLabel: 'New'
          },
          {
            key: 'new',
            name: 'Last month',
            iconProps: { iconName: 'Calendar' },
            ariaLabel: 'New'
          },
          {
            key: 'new',
            name: 'Last week',
            iconProps: { iconName: 'Calendar' },
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
            name: 'Weekly',
            iconProps: { iconName: 'Clock' },
            ariaLabel: 'New'
          },
          {
            key: 'new',
            name: 'Monthly',
            iconProps: { iconName: 'Clock' },
            ariaLabel: 'New'
          },
          {
            key: 'new',
            name: 'Yearly',
            iconProps: { iconName: 'Clock' },
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
  
  return (
    <div className={classNames.root}>
      <CommandBar 
        items={items}
        farItems={farItems}
        ariaLabel={'Use left and right arrow keys to navigate between commands'}
        className={classNames.commandBar}
      />
      <div className={classNames.contentArea}>
        <PageHeader text={'Reports'} />
        <div className={classNames.chartGrid}>
          <Card text={'Content area'} />
          <Card text={'Content area'} />
          <Card text={'Content area'} />
        </div>
      </div>
  </div>
  );
}