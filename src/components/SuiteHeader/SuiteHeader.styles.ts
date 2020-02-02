import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';


export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {
  const suiteHeaderGrid = `
    'leftActions . rightActions'
  `

  return {
    root: {
      backgroundColor: '#001433',
      height: '48px',
      width: '100%',
      display: 'grid',
      gridTemplateAreas: suiteHeaderGrid,
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateRows: 'auto',
    },
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();
