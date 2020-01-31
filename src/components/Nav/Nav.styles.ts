import { INavStyleProps, INavStyles } from "./Nav.types"
import { classNamesFunction } from "office-ui-fabric-react";

export const styles = (props: INavStyleProps): INavStyles => {
  return {
    root: {
      // height: '100%'
    }
  }
};


export const getClassNames = classNamesFunction<INavStyleProps, INavStyles>();