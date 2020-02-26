import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { IReportsPageProps } from './ReportsPage.types';
import { ResourceList } from '../../components/ResourceList/ResourceList';

const commands = [
  {
    key: 'new-segment',
    name: 'New segment',
    iconProps: { iconName: 'Add' },
    ariaLabel: 'New',
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

const segmentNames = ['Segment foo', 'Segment bar', 'Segment baz'];

export const ReportsPageBase: React.FC<IReportsPageProps> = () => {  
  return (
    <>
      <PageTemplate pageTitle={'ReportsPage'} commands={commands} farCommands={farCommands} commandBarIsVisible={true}>
        <ResourceList documentNames={segmentNames} />
      </PageTemplate>
    </>
  );
}