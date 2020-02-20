import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { ISourcesProps } from './Sources.types';
import { Card } from '../../components/Card/Card';

const commands = [
  {
    key: 'new-source',
    name: 'New source',
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

const settingsSections = ['Sources list']
const cards = settingsSections.map(section => {
  return <Card text={section} key={section} />
})

export const SourcesBase: React.FC<ISourcesProps> = () => {  
  return (
    <>
      <PageTemplate pageTitle={'Sources'} commands={commands} farCommands={farCommands} commandBarIsVisible={true}>
        {cards}
      </PageTemplate>
    </>
  );
}