import React from 'react';
import { getClassNames } from './Members.styles';
import { IMembersProps } from './Members.types';
import { Card } from '../Card/Card';

export const MembersBase: React.FC<IMembersProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  const cards = [];
  for (let i = 1; i < 17; i++) {
    cards.push(<Card text={`Card ${i}`} />)
  }

  return (
    <div className={classNames.root}>
      {cards}
    </div>
  );
}
