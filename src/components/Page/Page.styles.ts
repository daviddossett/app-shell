import { IPageStyleProps, IPageStyles } from "./Page.types"
import { getTheme, classNamesFunction } from "office-ui-fabric-react";

const gridLayout = `
'header header'
'nav content'
`

export const styles = (props: IPageStyleProps): IPageStyles => {

  const theme = getTheme();

  return {
    root: {
      height: '100%',
      display: 'grid',
      gridTemplateAreas: gridLayout,
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
    },
    header: {
      gridArea: 'header'
    },
    nav: {
      gridArea: 'nav'
    },
    content: {
      gridArea: 'content',
      padding: '32px',
      backgroundColor: theme.semanticColors.bodyBackground
    }
  }
}

export const getClassNames = classNamesFunction<IPageStyleProps, IPageStyles>();