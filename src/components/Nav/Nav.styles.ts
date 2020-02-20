import { INavStyleProps, INavStyles } from "./Nav.types"
import { classNamesFunction } from "office-ui-fabric-react";
import { breakpoint } from "../../constants/breakpoints";

export const styles = (props: INavStyleProps): INavStyles => {

  const hideNavAndOverlay: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      display: 'none',
    },
  };

  const useWideNav: any = {
    [`@media (max-width: ${breakpoint.sm})`]: {
      width: '80vw',
    },
  };

  return {
    overlaySidebar: {
      display: 'flex',
      height: '100vh',
      zIndex: 1000000,
      selectors: {
        ...hideNavAndOverlay,
        ...useWideNav
      },
    },
    overlay: {
      cursor: 'pointer',
      selectors: {
        ...hideNavAndOverlay
      }
    }
  }
};


export const getClassNames = classNamesFunction<INavStyleProps, INavStyles>();