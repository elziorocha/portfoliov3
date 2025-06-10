import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StackComponent } from '../../components/stack/stack.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, StackComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
