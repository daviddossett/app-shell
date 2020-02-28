import { DocumentTypes } from "../../utils/helpers/routeHelper";

export interface IDocument {
  key: string;
  name: string;
  value: string;
  resourceType: DocumentTypes;
  resourceId: number;
  projectId: number;
  iconName: string;
  fileType: string;
  modifiedBy: string;
  dateModified: string;
  dateModifiedValue: number;
}