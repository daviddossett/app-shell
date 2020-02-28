import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { IMetricsProps } from './Metrics.types';
import { ResourceList } from '../../components/ResourceList/ResourceList';
import { generateResources } from '../../utils/helpers/resourceItemGenerator';
import { DocumentTypes } from '../../utils/helpers/routeHelper';

const commands = [
  {
    key: 'new-metric',
    name: 'New metric',
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

const items = generateResources(['Metric foo', 'Metric bar', 'Metric baz'], DocumentTypes.Metric);

export const MetricsBase: React.FC<IMetricsProps> = () => {  
  return (
    <>
      <PageTemplate 
        pageTitle={'Metrics'} 
        hasBackButton={false}
        commands={commands} 
        farCommands={farCommands} 
        commandBarIsVisible={true}>
        <ResourceList items={items} />
      </PageTemplate>
    </>
  );
}