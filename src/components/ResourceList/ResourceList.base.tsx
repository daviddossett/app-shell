import React from 'react';
import { getClassNames } from './ResourceList.styles';
import { IResourceListProps } from './ResourceList.types';
import { IDocument } from './Document.types';
import { DetailsList, IColumn } from 'office-ui-fabric-react'
import { Link } from 'react-router-dom';

export const ResourceListBase: React.FC<IResourceListProps> = (props) => {
  const { styles, items, resourceType } = props;
  const classNames = getClassNames(styles);

  let resourceRoute = `${resourceType}s`

  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'File Type',
      iconClassName: classNames.fileIconHeaderIcon,
      ariaLabel: 'Column operations for File type, Press to sort on File type',
      iconName: 'Page',
      isIconOnly: true,
      fieldName: 'name',
      minWidth: 16,
      maxWidth: 16,
      onRender: (item: IDocument) => {
        return <img src={item.iconName} className={classNames.fileIconImg} alt={item.fileType + ' file icon'} />;
      }
    },
    {
      key: 'column2',
      name: 'Name',
      fieldName: 'name',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      data: 'string',
      isPadded: true,
      onRender: (item: IDocument) => {
        return <Link to={`/projects/${item.projectId}/${resourceRoute}/${item.resourceId}`} className={classNames.link}>{item.name}</Link>;
      }
    },
    {
      key: 'column3',
      name: 'Date Modified',
      fieldName: 'dateModifiedValue',
      minWidth: 90,
      maxWidth: 110,
      isResizable: true,
      data: 'number',
      onRender: (item: IDocument) => {
        return <span>{item.dateModified}</span>;
      },
      isPadded: true
    },
    {
      key: 'column4',
      name: 'Modified By',
      fieldName: 'modifiedBy',
      minWidth: 90,
      maxWidth: 110,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item: IDocument) => {
        return <span>{item.modifiedBy}</span>;
      },
      isPadded: true
    }
  ];

  return (
    <DetailsList 
      items={items} 
      columns={columns}
      selectionMode={0}
      className={classNames.root} />
  );
}

