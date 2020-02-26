import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { IReportPageProps } from './ReportPage.types';

const commands = [
  {
    key: 'advanced-settings',
    name: 'Settings',
    iconProps: { iconName: 'Settings' },
    ariaLabel: 'Settings',
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

export const ReportPageBase: React.FC<IReportPageProps> = () => {  
  return (
    <>
      <PageTemplate pageTitle={'ReportPage'} commands={commands} farCommands={farCommands} commandBarIsVisible={true} />
    </>
  );
}