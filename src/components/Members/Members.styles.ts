import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IMembersStyleProps, IMembersStyles } from './Members.types';
import { breakpoint } from '../../constants/breakpoints';

const mdPadding: any = {
  [`@media (min-width: ${breakpoint.md})`]: {
    padding: '0 24px 64px',
  },
};

const lgPadding: any = {
  [`@media (min-width: ${breakpoint.lg})`]: {
    padding: '0 32px 128px',
  },
};

export const getStyles = (props: IMembersStyleProps): IMembersStyles => {
  const theme = getTheme();

  return {
    root: {},
    commandBar: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`
    },
    commandBarHidden: {
      display: 'none'
    },
    contentArea: {
      padding: '0',
      selectors: {
        ...mdPadding,
        ...lgPadding
      }
    }
  }
}

export const getClassNames = classNamesFunction<IMembersStyleProps, IMembersStyles>();
