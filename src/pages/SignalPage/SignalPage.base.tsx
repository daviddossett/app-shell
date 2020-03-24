import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import { ISignalPageProps } from './SignalPage.types';
import { Card } from '../../components/Card/Card';
import { getClassNames } from './SignalPage.styles';

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

export const SignalPageBase: React.FC<ISignalPageProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  return (
    <>
      <PageTemplate
        pageTitle={'loginButtonClick'}
        hasBackButton={true}
        commands={commands}
        farCommands={farCommands}
        commandBarIsVisible={true}>
        <div className={classNames.children}>
          <div className={classNames.heroCard}>
            <Card text={'Hero'}  />
          </div>
          <div className={classNames.detailsCard}>
            <Card text={'Details'}  />
          </div>
          <div className={classNames.activityCard}>
            <Card text={'Activity'}  />
          </div>
        </div>
        </PageTemplate>
    </>
  );
}
