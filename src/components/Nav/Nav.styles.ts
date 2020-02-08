import { INavStyleProps, INavStyles } from "./Nav.types"
import { classNamesFunction, AnimationStyles } from "office-ui-fabric-react";

export const styles = (props: INavStyleProps): INavStyles => {

  const showNav: any = {
    [`@media (min-width: 1024px)`]: {
      display: 'block'
    },
  };

  return {
    root: {
      display: 'none',
      selectors: {
        ...showNav
      }
    }
  }
};


export const getClassNames = classNamesFunction<INavStyleProps, INavStyles>();