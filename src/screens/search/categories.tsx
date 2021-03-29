import { images } from 'assets/images/images';
import { ImageSourcePropType } from 'react-native';

export interface CategoryCard {
  id: number;
  label: string;
  image: ImageSourcePropType;
}

export const categories: CategoryCard[] = [
  {
    id: 1,
    label: 'Diseño Grafico',
    image: images.graphicDesigner,
  },
  {
    id: 2,
    label: 'Desarrollo Web',
    image: images.webDev,
  },
  {
    id: 3,
    label: 'Desarrollo Movil',
    image: images.mobileDev,
  },
  {
    id: 4,
    label: 'Desarrollo de Software',
    image: images.softwareDev,
  },
  {
    id: 5,
    label: 'Administrador de Sistemas',
    image: images.sysAdmin,
  },
  {
    id: 6,
    label: 'Redes',
    image: images.network,
  },
  {
    id: 7,
    label: 'IT Ventas',
    image: images.itSales,
  },
  {
    id: 8,
    label: 'Base de datos',
    image: images.dba,
  },
  {
    id: 9,
    label: 'Desarrollo de videojuegos',
    image: images.gameDev,
  },
];
