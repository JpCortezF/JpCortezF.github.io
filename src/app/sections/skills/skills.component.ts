import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SkillCardComponent } from "../../components/skill-card/skill-card.component";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Skill = {
  name: string;
  iconUrl: string;
  color: string;
  isMain?: boolean;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Ecosystem',
      skills: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#dd0031' },
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178c6' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
        { name: 'Tailwind', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#38bdf8' },
        { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26' },
        { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572b6' }
      ]
    },
    {
      category: 'Core Backend & Data',
      skills: [
        { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
        { name: 'C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#239120' },
        { name: 'SQL Server', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', color: '#cc292b' },
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
        { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#a8b9cc' }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ed' },
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#f05032' },
        { name: 'Socket.io', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/960px-Socket-io.svg.png', color: '#ffffff' },
        { name: 'Photoshop', iconUrl: 'https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg', color: '#31a8ff' }
      ]
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Scroll reveal con GSAP para que emerjan en el scroll
    const categories = document.querySelectorAll('.space-y-12 > .relative');
    
    categories.forEach((cat) => {
      const nodes = cat.querySelectorAll('.cyber-node-reveal');
      
      gsap.fromTo(nodes, 
        { 
          opacity: 0, 
          y: 40, 
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: cat,
            start: 'top 85%',
          }
        }
      );
    });
  }
}