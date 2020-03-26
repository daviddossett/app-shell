import { classNamesFunction } from 'office-ui-fabric-react';
import { ISignalPageStyleProps, ISignalPageStyles } from './SignalPage.types';
import { breakpoint } from '../../constants/breakpoints';

const baseGridTemplate = `
'card1'
'card2'
'card3'
'card4'
`

const mdGridTemplate = `
'card1 card1'
'card2 card3'
'card4 card4'
`

const lgGridTemplate = `
'card1 card1 card1 card1 card1 card1'
'card2 card2 card3 card3 card4 card4'
'. . . . card4 card4'
`

const xlGridTemplate = `
'card1 card1 card2 card2 card3 card3'
'card1 card1 card4 card4 card4 card4'
'. . card4 card4 card4 card4'
`

const mdLayout: any = {
  [`@media (min-width: ${breakpoint.md})`]: {
    gridTemplateAreas: mdGridTemplate,
    gridTemplateRows: '320px 260px 200px',
    gridAutoRows: 'initial',
  },
};

const lgLayout: any = {
  [`@media (min-width: ${breakpoint.lg})`]: {
    gridTemplateAreas: lgGridTemplate,
    gridTemplateRows: '320px 260px 200px',
    gridAutoRows: 'initial',
  },
};

const xlLayout: any = {
  [`@media (min-width: ${breakpoint.xl})`]: {
    gridTemplateAreas: xlGridTemplate,
    gridTemplateColumns: '220px 1fr 1fr 1fr 350px 1fr',
    gridTemplateRows: 'repeat(3, 160px)',
    gridAutoRows: 'initial',
  },
};


export const getStyles = (props: ISignalPageStyleProps): ISignalPageStyles => {
  return {
    signalPageGrid: {
      display: 'grid',
      gridTemplateAreas: baseGridTemplate,
      gridAutoRows: '200px',
      gridColumnGap: '16px',
      gridRowGap: '16px',
      selectors: {
        ...mdLayout,
        ...lgLayout,
        ...xlLayout
      }
    },
    card1: {
      gridArea: 'card1',
    },
    card2: {
      gridArea: 'card2'
    },
    card3: {
      gridArea: 'card3'
    },
    card4: {
      gridArea: 'card4'
    },
  }
}

export const getClassNames = classNamesFunction<ISignalPageStyleProps, ISignalPageStyles>();
