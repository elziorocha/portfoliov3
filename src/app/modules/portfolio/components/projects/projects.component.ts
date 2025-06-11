import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
})

export class ProjectsComponent {
  readonly chevronRightIcon = ChevronRight;

  public projects = signal([
    {
      title: 'PampaApp',
      src: '/images/stars.png',
      excerpt: `PampaApp é uma aplicação clone do website 'Twitter' ou 'X', contendo funcionalidades de publicação
      de posts, blablabla`,
      stack: [
        '/icons/html.svg',
        '/icons/css.svg',
        '/icons/tailwind.svg',
        '/icons/react.svg',
        '/icons/prisma.svg',
        '/icons/supabase.svg',
      ],
      link: 'https://pampaapp.vercel.app/'
    },
    {
      title: 'PampaApp',
      src: '/images/stars.png',
      excerpt: `PampaApp é uma aplicação clone do website 'Twitter' ou 'X', contendo funcionalidades de publicação
      de posts, blablabla`,
      stack: [
        '/icons/html.svg',
        '/icons/css.svg',
        '/icons/tailwind.svg',
        '/icons/react.svg',
        '/icons/prisma.svg',
        '/icons/supabase.svg',
      ],
      link: 'https://pampaapp.vercel.app/'
    },
    {
      title: 'PampaApp',
      src: '/images/stars.png',
      excerpt: `PampaApp é uma aplicação clone do website 'Twitter' ou 'X', contendo funcionalidades de publicação
      de posts, blablabla`,
      stack: [
        '/icons/html.svg',
        '/icons/css.svg',
        '/icons/tailwind.svg',
        '/icons/react.svg',
        '/icons/prisma.svg',
        '/icons/supabase.svg',
      ],
      link: 'https://pampaapp.vercel.app/'
    },
    {
      title: 'PampaApp',
      src: '/images/stars.png',
      excerpt: `PampaApp é uma aplicação clone do website 'Twitter' ou 'X', contendo funcionalidades de publicação
      de posts, blablabla`,
      stack: [
        '/icons/html.svg',
        '/icons/css.svg',
        '/icons/tailwind.svg',
        '/icons/react.svg',
        '/icons/prisma.svg',
        '/icons/supabase.svg',
      ],
      link: 'https://pampaapp.vercel.app/'
    },
    {
      title: 'PampaApp',
      src: '/images/stars.png',
      excerpt: `PampaApp é uma aplicação clone do website 'Twitter' ou 'X', contendo funcionalidades de publicação
      de posts, blablabla`,
      stack: [
        '/icons/html.svg',
        '/icons/css.svg',
        '/icons/tailwind.svg',
        '/icons/react.svg',
        '/icons/prisma.svg',
        '/icons/supabase.svg',
        '/icons/vue.svg',
        '/icons/angular.svg',
      ],
      link: 'https://pampaapp.vercel.app/'
    },
  ]);
}
