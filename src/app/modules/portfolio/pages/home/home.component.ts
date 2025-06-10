import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StackComponent } from '../../components/stack/stack.component';
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, StackComponent, ProjectsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
