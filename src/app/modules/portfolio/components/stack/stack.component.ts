import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [CommonModule],
  templateUrl: './stack.component.html',
})

export class StackComponent {

  public stackTechs = signal([
    {
      src: '/icons/html.svg',
      color: 'hover:bg-orange-700'
    },
    {
      src: '/icons/css.svg',
      color: 'hover:bg-blue-500'
    },
    {
      src: '/icons/tailwind.svg',
      color: 'hover:bg-cyan-600'
    },
  ])
}
