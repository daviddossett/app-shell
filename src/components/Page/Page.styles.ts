import { IPageStyleProps, IPageStyles } from "./Page.types"

const gridLayout = `
'header header'
'nav content'
`

export const styles = (props: IPageStyleProps): IPageStyles => {
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
      padding: '32px'
    }
  }
}