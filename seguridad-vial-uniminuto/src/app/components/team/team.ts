import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  members = [
    { name: 'Jorge',   img: '/jorge.jpeg'   },
    { name: 'Carlos',  img: '/carlos.jpeg'  },
    { name: 'Marcos',  img: '/marcos.jpeg'  },
    { name: 'Brandon', img: '/brandon.jpeg' },
  ];
}
