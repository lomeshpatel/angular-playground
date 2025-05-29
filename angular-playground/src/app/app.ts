import { Component } from '@angular/core';
import { DataTable } from './data-table/data-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-playground';
}
