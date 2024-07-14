import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from '../../top-navigation/top-navigation.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TopNavigationComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss',
})
export class PageContainerComponent {}
