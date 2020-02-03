import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';


export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {
  const suiteHeaderGrid = `
    'waffle title L search R actions'
  `
  const suiteHeaderHeight = '48px'
  const suiteHeaderColor = '#001433'

  return {
    root: {
      backgroundColor: suiteHeaderColor,
      height: suiteHeaderHeight,
      width: '100%',
      display: 'grid',
      gridTemplateAreas: suiteHeaderGrid,
      gridTemplateColumns: 'auto auto 1fr 500px 1fr auto',
      gridTemplateRows: 'auto',
    },
    waffle: {
      gridArea: 'waffle'
    },
    title: {
      gridArea: 'title'
    },
    spacerLeft: {
      gridArea: 'L'
    },
    search: {
      gridArea: 'search'
    },
    spacerRight: {
      gridArea: 'R'
    },
    actions: {
      gridArea: 'actions'
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();
