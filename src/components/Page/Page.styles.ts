import { IPageStyleProps, IPageStyles } from "./Page.types"

const gridLayout = `
'nav content'
`

export const styles = (props: IPageStyleProps): IPageStyles => {
  return {
    root: {
      height: '100%',
      display: 'grid',
      gridTemplateAreas: gridLayout,
      gridTemplateColumns: 'auto 1fr',
    },
    area: {      
      // display: 'grid',
    },
    nav: {
      gridArea: 'nav'
    },
    header: {
      height: '48px',
      backgroundColor: '#001433'
    },
    content: {
      padding: '32px',
      border: '32px solid #E6E6E6'
    }
  }
}