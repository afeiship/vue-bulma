import Button from './components/button';
import Columns from './components/columns';
import Box from './components/box';
import Content from './components/content';
import Delete from './components/delete';
import Notification from './components/notification';
import Progress from './components/progress';
import Table from './components/table';
import Tag from './components/tag';
import Title from './components/title';
import Subtitle from './components/subtitle';
import Breadcrumb from './components/breadcrumb';

export default [
  { path: '/button', component: Button },
  { path: '/columns', component: Columns },
  { path: '/box', component: Box },
  { path: '/content', component: Content },
  { path: '/delete', component: Delete },
  { path: '/notification', component: Notification },
  { path: '/progress', component: Progress },
  { path: '/table', component: Table },
  { path: '/tag', component: Tag },
  { path: '/title', component: Title },
  { path: '/subtitle', component: Subtitle },
  { path: '/breadcrumb', component: Breadcrumb }
];
