import React from 'react';
import { getClassNames } from './Members.styles';
import { IMembersProps } from './Members.types';
import { Card } from '../Card/Card';

export const MembersBase: React.FC<IMembersProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  const list = [];
  for (let i = 0; i < 17; i++) {
    list.push(<Card text={'Content'} />)
  }

  return (
    <div className={classNames.root}>
      {list}
    </div>
  );
}
