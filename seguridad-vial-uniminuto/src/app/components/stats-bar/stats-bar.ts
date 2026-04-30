import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stats-bar',
  imports: [NgFor],
  templateUrl: './stats-bar.html',
  styleUrl: './stats-bar.scss',
})
export class StatsBar {
  stats = [
    { num: '+12.000', label: 'Personas que transitan\nal frente cada semana' },
    { num: '3 de 4', label: 'Accidentes viales son\nevitables con normas' },
    { num: '80%', label: 'De peatones en riesgo son\njóvenes universitarios' },
    { num: '0', label: 'Razones válidas para\nignorar una señal de tránsito' },
  ];
}
