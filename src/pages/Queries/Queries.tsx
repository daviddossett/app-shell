import { styled } from 'office-ui-fabric-react';
import { IQueriesProps, IQueriesStyleProps, IQueriesStyles } from './Queries.types';
import { getStyles } from './Queries.styles';
import { QueriesBase } from './Queries.base'

export const Queries = styled<IQueriesProps, IQueriesStyleProps, IQueriesStyles>(QueriesBase, getStyles)