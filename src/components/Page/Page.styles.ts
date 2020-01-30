import { IPageStyleProps, IPageStyles } from "./Page.types"

const gridLayout = ` 
'nav content'
`

export const styles = (props: IPageStyleProps): IPageStyles => {
  return {
    root: {
      height: '100%'
    },
    area: {      
      display: 'grid',
      gridTemplateAreas: gridLayout,
      gridTemplateColumns: 'auto 1fr',
      height: 'inherit'
    },
    nav: {
      height: '100%',
    },
    content: {
      padding: '32px',
    }
  }
}