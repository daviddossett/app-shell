import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { IBillingProps } from './Billing.types';
import { Card } from '../../components/Card/Card';

const commands = [
  {
    key: 'export',
    name: 'Export to',
    iconProps: { iconName: 'PublishContent' },
    subMenuProps: {
      items: [
        {
          key: 'excel',
          name: 'Excel',
          iconProps: { iconName: 'ExcelLogoInverse' },
          ariaLabel: 'New'
        },
        {
          key: 'powerpoint',
          name: 'PowerPoint',
          iconProps: { iconName: 'PowerPointLogoInverse' },
          ariaLabel: 'New'
        },
        {
          key: 'pdf',
          name: 'PDF',
          iconProps: { iconName: 'PDF' },
          ariaLabel: 'New'
        },
        {
          key: 'csv',
          name: 'CSV',
          iconProps: { iconName: 'Table' },
          ariaLabel: 'New'
        },
      ]
    }
  }
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

const billingSections = ['Project billing summary', 'Costs over time', 'Plan details']
const cards = billingSections.map(section => {
  return <Card text={section} key={section} />
})

export const BillingBase: React.FC<IBillingProps> = () => {  
  return (
    <>
      <PageTemplate 
        pageTitle={'Billing'} 
        hasBackButton={false}
        commands={commands} 
        farCommands={farCommands} 
        commandBarIsVisible={true}>
        {cards}
      </PageTemplate>
    </>
  );
}