import { NoContentComponent } from './no-content.component';

export const routes = [
  { path: '', children: [
    { path: '', component: NoContentComponent }
  ]}
];
