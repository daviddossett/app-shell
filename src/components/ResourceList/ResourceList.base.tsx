import React from 'react';
import { getClassNames } from './ResourceList.styles';
import { IResourceListProps } from './ResourceList.types';

export const ResourceListBase: React.FC<IResourceListProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  return (
    <></>
  );
}