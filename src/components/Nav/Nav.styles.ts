import { INavStyleProps, INavStyles } from "./Nav.types"
import { classNamesFunction } from "office-ui-fabric-react";
import { breakpoint } from "../../constants/breakpoints";

export const styles = (props: INavStyleProps): INavStyles => {

  const showNav: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      display: 'block',
    },
  };

  const showOverlay: any = {
    [`@media (max-width: ${breakpoint.lg})`]: {
      display: 'block',
      zIndex: 1
    },
  };

  return {
    sidebarWithOverlay: {
      display: 'none',
      selectors: {
        ...showOverlay
      }
    },
    sidebarInLayout: {
      display: 'none',
      selectors: {
        ...showNav
      }
    }
  }
};


export const getClassNames = classNamesFunction<INavStyleProps, INavStyles>();