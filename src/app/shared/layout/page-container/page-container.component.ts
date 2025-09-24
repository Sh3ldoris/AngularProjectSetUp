import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from '../../top-navigation/top-navigation.component';

@Component({
  selector: 'app-page-container',
  imports: [RouterOutlet, TopNavigationComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss',
})
export class PageContainerComponent {}
