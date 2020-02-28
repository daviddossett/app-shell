import React from 'react';
import { getClassNames } from './PageHeader.styles';
import { IPageHeaderProps } from './PageHeader.types';
import { ActionButton } from 'office-ui-fabric-react';

export const PageHeaderBase: React.FC<IPageHeaderProps> = (props) => {
  const { styles, title, hasBackButton } = props;
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.root}>
      {(hasBackButton &&
        <ActionButton iconProps={{iconName: 'Back'}}>Back to containier</ActionButton>
      )}
      <h1 className={classNames.title}>{title}</h1>
    </div>
  );
}