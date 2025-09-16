import { Component, signal } from '@angular/core';
import { UserListComponent } from './components/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <main>
      <app-user-list></app-user-list>
    </main>
  `,
  styles: [`
    main {
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class App {
  protected readonly title = signal('Lista de Usuarios');
}
