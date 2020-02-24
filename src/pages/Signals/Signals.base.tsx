import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { ISignalsProps } from './Signals.types';
import { ResourceList } from '../../components/ResourceList/ResourceList';

const commands = [
  {
    key: 'new-signal',
    name: 'New signal',
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

const signalNames = ['Signal foo', 'Signal bar', 'Signal baz'];

export const SignalsBase: React.FC<ISignalsProps> = () => {  
  return (
    <>
      <PageTemplate pageTitle={'Signals'} commands={commands} farCommands={farCommands} commandBarIsVisible={true}>
          <ResourceList documentNames={signalNames} />
      </PageTemplate>
    </>
  );
}