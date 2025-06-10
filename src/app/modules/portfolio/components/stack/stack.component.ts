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
      color: 'hover:bg-blue-600'
    },
    {
      src: '/icons/tailwind.svg',
      color: 'hover:bg-teal-600'
    },
    {
      src: '/icons/javascript.svg',
      color: 'hover:bg-yellow-600'
    },
    {
      src: '/icons/typescript.svg',
      color: 'hover:bg-sky-800'
    },
    {
      src: '/icons/react.svg',
      color: 'hover:bg-blue-800'
    },
    {
      src: '/icons/angular.svg',
      color: 'hover:bg-rose-700'
    },
    {
      src: '/icons/vue.svg',
      color: 'hover:bg-emerald-600'
    },
    {
      src: '/icons/npm.svg',
      color: 'hover:bg-red-600'
    },
  ])
}
