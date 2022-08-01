import paramètres from '../../assets/icons/settings.svg';
import tutos from '../../assets/icons/tutos.svg';
import stats from '../../assets/icons/stats.svg';
import feed from '../../assets/icons/feed.svg';

export const nav = [
  { icon: feed, name: "Fil d'actualité", link: '/feed' },
  { icon: stats, name: 'Mes stats', link: '/stats' },
  { icon: tutos, name: 'Tutos', link: '/tutos' },
  { icon: paramètres, name: 'Paramètres', link: '/settings' },
];
