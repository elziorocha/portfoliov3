import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IstackTech } from '../../interface/stackTechs.interface';

@Component({
  selector: 'app-stack',
  imports: [CommonModule],
  templateUrl: './stack.component.html',
})

export class StackComponent {

  public stackTechs = signal<IstackTech[]>([
    {
      src: '/icons/html.svg',
      color: 'hover:bg-orange-700 text-orange-700',
      label: 'HTML5'
    },
    {
      src: '/icons/css.svg',
      color: 'hover:bg-blue-600 text-blue-600',
      label: 'CSS3'
    },
    {
      src: '/icons/tailwind.svg',
      color: 'hover:bg-teal-600 text-teal-600',
      label: 'Tailwind'
    },
    {
      src: '/icons/javascript.svg',
      color: 'hover:bg-yellow-600 text-yellow-600',
      label: 'Javascript'
    },
    {
      src: '/icons/typescript.svg',
      color: 'hover:bg-sky-800 text-sky-800',
      label: 'Typescript'
    },
    {
      src: '/icons/react.svg',
      color: 'hover:bg-blue-800 text-blue-800',
      label: 'React'
    },
    {
      src: '/icons/angular.svg',
      color: 'hover:bg-rose-700 text-rose-700',
      label: 'Angular'
    },
    {
      src: '/icons/vue.svg',
      color: 'hover:bg-emerald-600 text-emerald-600',
      label: 'Vue'
    },
    {
      src: '/icons/cypress.svg',
      color: 'hover:bg-green-400 text-green-400',
      label: 'Cypress'
    },
    {
      src: '/icons/docker.svg',
      color: 'hover:bg-teal-700 text-teal-700',
      label: 'Docker'
    },
    {
      src: '/icons/ubuntu.svg',
      color: 'hover:bg-amber-700 text-amber-700',
      label: 'Ubuntu OS'
    },
    {
      src: '/icons/git.svg',
      color: 'hover:bg-red-500 text-red-500',
      label: 'Git'
    },
    {
      src: '/icons/github.svg',
      color: 'hover:bg-purple-600 text-purple-600',
      label: 'Github'
    },
    {
      src: '/icons/database.svg',
      color: 'hover:bg-gray-400 text-gray-400',
      label: 'Database'
    },
    {
      src: '/icons/sql.svg',
      color: 'hover:bg-cyan-400 text-cyan-400',
      label: 'MySQL'
    },
    {
      src: '/icons/mongodb.svg',
      color: 'hover:bg-emerald-800 text-emerald-800',
      label: 'mongoDB'
    },
    {
      src: '/icons/supabase.svg',
      color: 'hover:bg-green-700 text-green-700',
      label: 'Supabase'
    },
    {
      src: '/icons/prisma.svg',
      color: 'hover:bg-zinc-300 text-zinc-300',
      label: 'Prisma'
    },
    {
      src: '/icons/node.svg',
      color: 'hover:bg-emerald-700 text-emerald-700',
      label: 'NodeJS'
    },
    {
      src: '/icons/php.svg',
      color: 'hover:bg-violet-500 text-violet-500',
      label: 'PHP'
    },
    {
      src: '/icons/laravel.svg',
      color: 'hover:bg-red-700 text-red-700',
      label: 'Laravel'
    },
    {
      src: '/icons/python.svg',
      color: 'hover:bg-sky-700 text-sky-700',
      label: 'Python'
    },
    {
      src: '/icons/nextjs.svg',
      color: 'hover:bg-zinc-300 text-zinc-300',
      label: 'NextJS'
    },
    {
      src: '/icons/flutter.svg',
      color: 'hover:bg-sky-500 text-sky-500',
      label: 'Flutter'
    },
  ])

}
