import { classNamesFunction } from 'office-ui-fabric-react';
import { ISignalPageStyleProps, ISignalPageStyles } from './SignalPage.types';
import { breakpoint } from '../../constants/breakpoints';

const baseGrid = `
'hero'
'details'
'activity'
`

const mdGrid = `
'hero hero'
'details activity'
`

const xlGrid = `
'hero hero details'
'activity activity activity'
`

const mdLayout: any = {
  [`@media (min-width: ${breakpoint.md})`]: {
    gridTemplateAreas: mdGrid
  },
};

const xlLayout: any = {
  [`@media (min-width: ${breakpoint.xl})`]: {
    gridTemplateAreas: xlGrid
  },
};

export const getStyles = (props: ISignalPageStyleProps): ISignalPageStyles => {
  return {
    root: {},
    children: {
      display: 'grid',
      gridColumnGap: '16px',
      gridTemplateAreas: baseGrid,
      selectors: {
        ...mdLayout,
        ...xlLayout,
      }
    },
    heroCard: {
      gridArea: 'hero'
    },
    detailsCard: {
      gridArea: 'details'
    },
    activityCard: {
      gridArea: 'activity'
    }
  }
}

export const getClassNames = classNamesFunction<ISignalPageStyleProps, ISignalPageStyles>();
