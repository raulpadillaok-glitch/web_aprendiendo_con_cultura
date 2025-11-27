import { Routes } from '@angular/router';

// Fíjate que al final de la ruta dice './pages/home/home' y NO 'home.component'
import { Home } from './pages/home/home';
import { Historia } from './pages/historia/historia';
import { Jugabilidad } from './pages/jugabilidad/jugabilidad';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia },
  { path: 'jugabilidad', component: Jugabilidad },
  { path: '**', redirectTo: '' }
];