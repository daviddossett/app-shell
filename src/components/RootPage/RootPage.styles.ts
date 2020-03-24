import { IPageStyleProps, IPageStyles } from "./RootPage.types"
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

const lgLayout: any = {
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
      gridTemplateRows: 'auto 1fr',
      background: theme.palette.neutralLighterAlt,
      selectors: {
        ...lgLayout
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
