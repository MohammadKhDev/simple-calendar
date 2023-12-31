import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar application';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      minWidth: 'fit-content',
    });
  }
}
