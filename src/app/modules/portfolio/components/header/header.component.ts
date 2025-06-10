import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Github, Linkedin, LucideAngularModule, Mail, MessageCircleMore, Terminal } from 'lucide-angular';
import { IlinksContato } from '../../interface/linksContato.interface';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  readonly terminalIcon = Terminal;
  readonly messageIcon = MessageCircleMore;
  readonly linkedinIcon = Linkedin;
  readonly mailIcon = Mail;
  readonly githubIcon = Github;

  public linksContato = signal<IlinksContato[]>([
    {
      href: "https://api.whatsapp.com/send?phone=5542984018839",
      label: "Whatsapp",
      icon: this.messageIcon
    },
    {
      href: "https://www.linkedin.com/in/elziorocha/",
      label: "LinkedIn",
      icon: this.linkedinIcon
    },
    {
      href: "mailto:contato.elziorocha@gmail.com",
      label: "E-mail",
      icon: this.mailIcon
    },
    {
      href: "https://github.com/elziorocha",
      label: "Github",
      icon: this.githubIcon
    }
  ]);
}
