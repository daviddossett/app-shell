import { styled } from 'office-ui-fabric-react';
import { IOfficeWaffleMenuProps, IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles } from './OfficeWaffleMenu.types';
import { getStyles } from './OfficeWaffleMenu.styles';
import { OfficeWaffleMenuBase } from './OfficeWaffleMenu.base'

export const OfficeWaffleMenu = styled<IOfficeWaffleMenuProps, IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles>(OfficeWaffleMenuBase, getStyles)