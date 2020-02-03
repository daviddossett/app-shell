import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';


export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {
  const suiteHeaderGrid = `
    'waffle title . actions'
  `

  return {
    root: {
      backgroundColor: '#001433',
      height: '48px',
      width: '100%',
      display: 'grid',
      gridTemplateAreas: suiteHeaderGrid,
      gridTemplateColumns: 'auto auto 1fr auto',
      gridTemplateRows: 'auto',
    },
    waffle: {
      gridArea: 'waffle',
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      gridArea: 'title'
    },
    actions: {
      gridArea: 'actions'
    },
    search: {
      gridArea: 'search'
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();
