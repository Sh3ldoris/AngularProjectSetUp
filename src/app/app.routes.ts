import { Routes } from '@angular/router';
import { MainRoute } from './shared/objects/objects';
import { PageContainerComponent } from './shared/layout/layout';

export const routes: Routes = [
  { path: '', redirectTo: MainRoute.INTRODUCTION, pathMatch: 'full' },
  // {
  //   path: MainRoute.UNKNOWN,
  //   component: UnknownPageComponent,
  // },
  {
    path: '',
    component: PageContainerComponent,
    children: [
      {
        path: MainRoute.INTRODUCTION,
        loadChildren: () =>
          import('./features/introduction/introduction.routes').then(
            x => x.routes
          ),
      },
      {
        path: MainRoute.GALLERY,
        loadChildren: () =>
          import('./features/gallery/gallery.routes').then(x => x.routes),
      },
      {
        path: MainRoute.CONTACT,
        loadChildren: () =>
          import('./features/contact/contact.routes').then(x => x.routes),
      },
    ],
  },
  { path: '**', redirectTo: MainRoute.INTRODUCTION },
];
