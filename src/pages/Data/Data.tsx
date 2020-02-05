import { styled } from 'office-ui-fabric-react';
import { IDataProps, IDataStyleProps, IDataStyles } from './Data.types';
import { getStyles } from './Data.styles';
import { DataBase } from './Data.base'

export const Data = styled<IDataProps, IDataStyleProps, IDataStyles>(DataBase, getStyles)