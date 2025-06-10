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
      src: '/icons/cypress.svg',
      color: 'hover:bg-green-400'
    },
    {
      src: '/icons/docker.svg',
      color: 'hover:bg-teal-700'
    },
    {
      src: '/icons/ubuntu.svg',
      color: 'hover:bg-amber-700'
    },
    {
      src: '/icons/git.svg',
      color: 'hover:bg-red-500'
    },
    {
      src: '/icons/github.svg',
      color: 'hover:bg-purple-600 pl-1.5'
    },
    {
      src: '/icons/database.svg',
      color: 'hover:bg-gray-400'
    },
    {
      src: '/icons/sql.svg',
      color: 'hover:bg-cyan-400'
    },
    {
      src: '/icons/mongodb.svg',
      color: 'hover:bg-emerald-800'
    },
    {
      src: '/icons/supabase.svg',
      color: 'hover:bg-green-700'
    },
    {
      src: '/icons/prisma.svg',
      color: 'hover:bg-zinc-300'
    },
    {
      src: '/icons/node.svg',
      color: 'hover:bg-emerald-700'
    },
    {
      src: '/icons/php.svg',
      color: 'hover:bg-violet-500'
    },
    {
      src: '/icons/laravel.svg',
      color: 'hover:bg-red-700'
    },
    {
      src: '/icons/python.svg',
      color: 'hover:bg-sky-600'
    },
    {
      src: '/icons/nextjs.svg',
      color: 'hover:bg-zinc-300'
    },
    {
      src: '/icons/flutter.svg',
      color: 'hover:bg-sky-500'
    },
  ])
}
