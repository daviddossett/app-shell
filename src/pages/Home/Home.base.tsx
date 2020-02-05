import { getClassNames } from './Home.styles';
import { IHomeProps } from './Home.types';
import React from 'react';
import { PageHeader } from '@business-app/fabric';

export const HomeBase: React.FC<IHomeProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <PageHeader title={'Home'}/>
      <div className={classNames.fakeCard}>
        <div className={classNames.fakeContentArea}>Content area</div>
      </div>
      <div className={classNames.fakeCard}>
        <div className={classNames.fakeContentArea}>Content area</div>
      </div>
      <div className={classNames.fakeCard}>
        <div className={classNames.fakeContentArea}>Content area</div>
      </div>
    </div>
  );
}