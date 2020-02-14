import { getClassNames } from './BasicSettings.styles';
import { IBasicSettingsProps } from './BasicSettings.types';
import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';

const commands = [
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

export const BasicSettingsBase: React.FC<IBasicSettingsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <>
      <PageTemplate
        pageTitle={'Basics'}
        commands={commands}
        farCommands={farCommands}
      />
    </>
  );
}