import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { IProjectMembersProps } from './ProjectMembers.types';
import { ResourceList } from '../../components/ResourceList/ResourceList';

const commands = [
  {
    key: 'new',
    name: 'New member',
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

const memberNames = ['Amanda Brady', 'Scott Dixon', 'Jean-Michel Lemiuex', 'Kaitlyn Vincie', 'Dieter Bahn' , 'Brianne Kimmel', 'Saurabh Sharan'];

export const ProjectMembersBase: React.FC<IProjectMembersProps> = () => {  
  return (
    <>
      <PageTemplate pageTitle={'Members'} commands={commands} farCommands={farCommands} commandBarIsVisible={true}>
        <ResourceList documentNames={memberNames}/>
      </PageTemplate>
    </>
  );
}