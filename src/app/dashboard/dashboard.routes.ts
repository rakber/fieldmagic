import { DashboardComponent } from './dashboard.component';

export const routes = [
  { path: '', children: [
    { path: '', component: DashboardComponent }
  ]}
];
