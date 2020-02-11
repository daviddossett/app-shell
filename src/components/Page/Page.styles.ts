import { IPageStyleProps, IPageStyles } from "./Page.types"
import { classNamesFunction, getTheme } from "office-ui-fabric-react";

const gridLayout = `
'header header'
'nav content'
`
const theme = getTheme();

export const styles = (props: IPageStyleProps): IPageStyles => {
  return {
    root: {
      height: '100%',
      display: 'grid',
      overflow: 'hidden',
      gridTemplateAreas: gridLayout,
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
      background: theme.palette.neutralLighterAlt
    },
    header: {
      gridArea: 'header'
    },
    nav: {
      gridArea: 'nav'
    },
    content: {
      gridArea: 'content',
      overflow: 'auto'
    }
  }
}

export const getClassNames = classNamesFunction<IPageStyleProps, IPageStyles>();