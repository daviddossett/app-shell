import { IDocument } from '../../components/ResourceList/Document.types';
import { DocumentTypes } from './routeHelper';

export function generateResources(resourceNames: string[], resourceType: DocumentTypes) {
  const generatedItems: IDocument[] = [];

  for (let i = 0; i < resourceNames.length; i++) {
    let resourceName = resourceNames[i];
    let projectId = randomId();
    let resourceId = randomId();
    let date = randomDate(new Date(2019, 0, 1), new Date());
    let userName = randomUser();
    let fileType = randomFileIcon();

    generatedItems.push({
      key: i.toString(),
      name: resourceName,
      value: resourceName,
      resourceType: resourceType,
      projectId: projectId,
      resourceId: resourceId,
      iconName: fileType.url,
      fileType: fileType.docType,
      modifiedBy: userName,
      dateModified: date.dateFormatted,
      dateModifiedValue: date.value
    });
  }
  return generatedItems;
}

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

function randomId() {
  let id = Math.floor(Math.random() * (999999 - 100000) + 100000);
  return id;
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