import React from 'react';
import { IReportsProps } from './Reports.types';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { Card } from '../../components/Card/Card';

export const ReportsBase: React.FC<IReportsProps> = () => {
  
  const commands = [
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
  
  const farCommands = [
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

  const membersSections = ['Chart 1', 'Chart 2', 'Chart 3']
  const cards = membersSections.map(section => {
   return <Card text={section} key={section} />
  })
  
  return (
    <>
      <PageTemplate pageTitle={'Reports'} commands={commands} farCommands={farCommands} commandBarIsVisible={true}>
        {cards}
      </PageTemplate>
    </>
  );
}