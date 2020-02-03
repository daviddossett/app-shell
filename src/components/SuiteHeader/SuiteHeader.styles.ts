import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';


export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {
  const suiteHeaderGrid = `
    'leftActions title . search . rightActions'
  `

  return {
    root: {
      backgroundColor: '#001433',
      height: '48px',
      width: '100%',
      display: 'grid',
      gridTemplateAreas: suiteHeaderGrid,
      gridTemplateColumns: 'auto auto 1fr 400px 1fr auto',
      gridTemplateRows: 'auto',
    },
    leftActions: {
      gridArea: 'leftActions',
      display: 'flex',
      alignItems: 'center'
    },
    rightActions: {
      gridArea: 'rightActions',
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      fontSize: '16px',
      fontWeight: '600',  
      lineHeight: '40px',
      textOverflow: 'ellipses',
      color: '#FFFFFF',
      gridArea: 'title',
      alignSelf: 'center',
      padding: '0 8px',
      textDecoration: 'none',
      border: 'none',
      selectors: {
        ':hover, :focus, :active': {
          textDecoration: 'none',
          color: '#FFFFFF'
        }
      }
    },
    search: {
      gridArea: 'search',
      alignSelf: 'center',
      backgroundColor: 'rgba(256,256,256,0.15)',
      border: 'none'
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();
