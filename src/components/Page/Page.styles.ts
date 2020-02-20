import { IPageStyleProps, IPageStyles } from "./Page.types"
import { classNamesFunction, getTheme } from "office-ui-fabric-react";
import { breakpoint } from "../../constants/breakpoints";

const gridLayout = `
'header'
'content'
`
const lgGridLayout = `
'header header'
'nav content'
`

const showLargeLayout: any = {
  [`@media (min-width: ${breakpoint.lg})`]: {
    gridTemplateAreas: lgGridLayout,
    gridTemplateColumns: 'auto 1fr'
  },
};

const theme = getTheme();

export const styles = (props: IPageStyleProps): IPageStyles => {
  return {
    root: {
      height: '100%',
      display: 'grid',
      overflow: 'hidden',
      gridTemplateAreas: gridLayout,
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto 1fr',
      background: theme.palette.neutralLighterAlt,
      selectors: {
        ...showLargeLayout
      }
    },
    header: {
      gridArea: 'header'
    },
    nav: {
      gridArea: 'nav'
    },
    content: {
      gridArea: 'content',
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  }
}

export const getClassNames = classNamesFunction<IPageStyleProps, IPageStyles>();