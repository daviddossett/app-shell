import { Path } from 'history';

export enum DocumentTypes {
  Project = 'project',
  Report = 'report',
  Signal = 'signal',
  Source = 'source',
  Segment = 'segment',
  Metric = 'metric'
}

export function getProjectBasedResourcePath(
  resourceType: DocumentTypes, 
  projectId: string,
  resourceId: string
  ): Path {
    const basePath = `/projects/${projectId}`;

  switch (resourceType) {
    case DocumentTypes.Report:
      return `${basePath}/reports/${resourceId}`;
    case DocumentTypes.Signal:
      return `${basePath}/signals/${resourceId}`;
    case DocumentTypes.Source:
      return `${basePath}/sources/${resourceId}`;
    case DocumentTypes.Segment:
      return `${basePath}/segments/${resourceId}`;
    case DocumentTypes.Metric:
      return `${basePath}/metrics/${resourceId}`;
    default:
      throw new Error(`Unknown resource type ${resourceType}`);
  }
}