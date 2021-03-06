import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'panel-cal-dia2', loadChildren: './panel-cal-dia2/panel-cal-dia2.module#PanelCalDia2PageModule' },
  { path: 'panel-cal-rcv', loadChildren: './panel-cal-rcv/panel-cal-rcv.module#PanelCalRcvPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
