import React from 'react';
import { getClassNames } from './PageHeader.styles';
import { IPageHeaderProps } from './PageHeader.types';
import { ActionButton } from 'office-ui-fabric-react';
import { useHistory } from 'react-router-dom';

export const PageHeaderBase: React.FC<IPageHeaderProps> = (props) => {
  const { styles, title, hasBackButton } = props;
  const classNames = getClassNames(styles);
  const history = useHistory();

  const backButtonText = 'Back'

  function handleClick() {
    history.goBack();
  }

  return (
    <div className={classNames.root}>
      {(hasBackButton &&
        <ActionButton
          iconProps={{iconName: 'Back'}}
          className={classNames.backButton}
          onClick={handleClick}>
          {backButtonText}
          </ActionButton>
      )}
      <h1 className={classNames.title}>{title}</h1>
    </div>
  );
}
