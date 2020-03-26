import { classNamesFunction } from 'office-ui-fabric-react';
import { ISignalPageStyleProps, ISignalPageStyles } from './SignalPage.types';
import { breakpoint } from '../../constants/breakpoints';

const baseGridTemplate = `
'card1'
'card2'
'card3'
'card4'
`

export const getStyles = (props: ISignalPageStyleProps): ISignalPageStyles => {
  return {
    signalPageGrid: {
      display: 'grid',
      gridTemplateAreas: baseGridTemplate,
      gridAutoRows: '200px',
      gridRowGap: '16px',
      gridColumnGap: '16px',
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
