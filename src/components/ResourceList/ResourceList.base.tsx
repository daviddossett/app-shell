import React, { useState } from 'react';
import { getClassNames } from './ResourceList.styles';
import { IResourceListProps } from './ResourceList.types';
import { DetailsList, IColumn } from 'office-ui-fabric-react'



export const ResourceListBase: React.FC<IResourceListProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  interface IDocument {
    key: string;
    name: string;
    value: string;
    iconName: string;
    fileType: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
  }
  
  const FILE_ICONS: { name: string }[] = [
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
  
  const LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
  ).split(' ');
  let loremIndex = 0;
  function _lorem(wordCount: number): string {
    const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
  }
  
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
      minWidth: 70,
      maxWidth: 90,
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
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: 'string',
      onRender: (item: IDocument) => {
        return <span>{item.modifiedBy}</span>;
      },
      isPadded: true
    },
    {
      key: 'column5',
      name: 'File Size',
      fieldName: 'fileSizeRaw',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      onRender: (item: IDocument) => {
        return <span>{item.fileSize}</span>;
      }
    }
  ];
  
  const allItems: IDocument[] = _generateDocuments();
  
  function _randomDate(start: Date, end: Date): { value: number; dateFormatted: string } {
    const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
      value: date.valueOf(),
      dateFormatted: date.toLocaleDateString()
    };
  }
  
  function _randomFileSize(): { value: string; rawSize: number } {
    const fileSize: number = Math.floor(Math.random() * 100) + 30;
    return {
      value: `${fileSize} KB`,
      rawSize: fileSize
    };
  }
  
  function _randomFileIcon(): { docType: string; url: string } {
    const docType: string = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
    return {
      docType,
      url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
    };
  }
  
  function _generateDocuments() {
    const items: IDocument[] = [];
    for (let i = 0; i < 200; i++) {
      const randomDate = _randomDate(new Date(2012, 0, 1), new Date());
      const randomFileSize = _randomFileSize();
      const randomFileType = _randomFileIcon();
      let fileName = _lorem(2);
      fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.docType}`);
      let userName = _lorem(2);
      userName = userName.split(' ').map((name: string) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
      items.push({
        key: i.toString(),
        name: fileName,
        value: fileName,
        iconName: randomFileType.url,
        fileType: randomFileType.docType,
        modifiedBy: userName,
        dateModified: randomDate.dateFormatted,
        dateModifiedValue: randomDate.value,
        fileSize: randomFileSize.value,
        fileSizeRaw: randomFileSize.rawSize
      });
    }
    return items;
  }

  const [currentItems, setItems] = useState(allItems);
  const [currentColumns, setColumns] = useState(columns);

  return (
    <DetailsList 
      items={currentItems} 
      columns={currentColumns} 
      className={classNames.root} />
  );
}

