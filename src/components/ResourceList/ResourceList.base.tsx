import React from 'react';
import { getClassNames } from './ResourceList.styles';
import { IResourceListProps } from './ResourceList.types';
import { DetailsList, IColumn } from 'office-ui-fabric-react'
import { IDocument } from './Document.types';

export const ResourceListBase: React.FC<IResourceListProps> = (props) => {
  const { styles, documentNames } = props;
  const classNames = getClassNames(styles);

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
      isPadded: true
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
  
  function randomFileIcon(): { docType: string; url: string } {
    const icons: { name: string }[] = [
      { name: 'accdb' },
      { name: 'csv' },
      { name: 'docx' },
      { name: 'dotx' },
      { name: 'mpt' },
      { name: 'odt' },
      { name: 'one' },
      { name: 'onepkg' },
      { name: 'onetoc' },
      { name: 'pptx' },
      { name: 'pub' },
      { name: 'vsdx' },
      { name: 'xls' },
      { name: 'xlsx' },
      { name: 'xsn' }
    ];

    const docType: string = icons[Math.floor(Math.random() * icons.length)].name;
    return {
      docType,
      url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
    };
  }

  function randomUser() {
    const users = ['Amanda Brady', 'Scott Dixon', 'Jean-Michel Lemiuex', 'Kaitlyn Vincie', 'Dieter Bahn' , 'Brianne Kimmel', 'Saurabh Sharan'];
    let user = users[Math.floor(Math.random() * users.length)];
    return user;
  }

  function randomDate(start: Date, end: Date): { value: number; dateFormatted: string } {
    const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
      value: date.valueOf(),
      dateFormatted: date.toLocaleDateString()
    };
  }

  function randomResourceName() {
    let name = documentNames[Math.floor(Math.random() * documentNames.length)];
    return name;
  }

  function generateDocuments() {
    const generatedItems: IDocument[] = [];
    for (let i = 1; i < 101; i++) {
      const date = randomDate(new Date(2019, 0, 1), new Date());
      const fileType = randomFileIcon();
      let resourceName = randomResourceName();
      let userName = randomUser();
      generatedItems.push({
        key: i.toString(),
        name: resourceName,
        value: resourceName,
        iconName: fileType.url,
        fileType: fileType.docType,
        modifiedBy: userName,
        dateModified: date.dateFormatted,
        dateModifiedValue: date.value
      });
    }
    return generatedItems;
  }

  const items: IDocument[] = generateDocuments();

  return (
    <DetailsList 
      items={items} 
      columns={columns}
      selectionMode={0}
      className={classNames.root} />
  );
}

