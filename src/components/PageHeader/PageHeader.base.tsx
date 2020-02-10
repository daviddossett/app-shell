import { getClassNames } from './PageHeader.styles';
import { IPageHeaderProps } from './PageHeader.types';
import React from 'react';

export const PageHeaderBase: React.FC<IPageHeaderProps> = (props) => {
  const { styles, text } = props;
  const classNames = getClassNames(styles);

  return (
    <div>
      <h1 className={classNames.text}>{text}</h1>
    </div>
  );
}