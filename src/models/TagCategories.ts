export type TagCategoriesTypes =
  | 'graphicDesigner'
  | 'webDev'
  | 'mobileDev'
  | 'softwareDev'
  | 'sysAdmin'
  | 'network'
  | 'itSales'
  | 'dba'
  | 'gameDev';

export interface Tag {
  value: TagCategoriesTypes;
  label: string;
}

export const Tags: Tag[] = [
  {
    value: 'graphicDesigner',
    label: 'Diseño Grafico',
  },
  {
    value: 'webDev',
    label: 'Desarrollo Web',
  },
  {
    value: 'sysAdmin',
    label: 'Administrador de Sistemas',
  },
  {
    value: 'softwareDev',
    label: 'Desarrollo de Software',
  },
  {
    value: 'network',
    label: 'Redes y Telecomunicaciones',
  },
  {
    value: 'mobileDev',
    label: 'Desarrollo Mobile',
  },
  {
    value: 'dba',
    label: 'Administrador de Base de Datos',
  },
  {
    value: 'gameDev',
    label: 'Desarrollo de Videojuegos',
  },
];
