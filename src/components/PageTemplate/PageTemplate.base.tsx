import React from 'react';
import { getClassNames } from './PageTemplate.styles';
import { IPageTemplateProps } from './PageTemplate.types';
import { PageHeader } from '../PageHeader/PageHeader';
import { CommandBar } from 'office-ui-fabric-react';

export const PageTemplateBase: React.FC<IPageTemplateProps> = (props) => {
  const { styles, pageTitle, commands, farCommands, commandBarIsVisible } = props;
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.root}>
      <CommandBar
        items={commands}
        farItems={farCommands}
        ariaLabel={'Use left and right arrow keys to navigate between commands'}
        className={classNames.commandBar}
      />
      <div className={classNames.contentArea}>
        <PageHeader text={pageTitle} />
      </div>
    </div>
  );
}