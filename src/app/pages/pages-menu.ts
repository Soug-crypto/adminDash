import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Users Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Events Table',
        link: '/pages/tables/Events-table',
      },
    ],
  },
];
