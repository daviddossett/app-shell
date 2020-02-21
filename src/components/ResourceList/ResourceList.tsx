import { styled } from 'office-ui-fabric-react';
import { IResourceListProps, IResourceListStyleProps, IResourceListStyles } from './ResourceList.types';
import { getStyles } from './ResourceList.styles';
import { ResourceListBase } from './ResourceList.base'

export const ResourceList = styled<IResourceListProps, IResourceListStyleProps, IResourceListStyles>(ResourceListBase, getStyles)