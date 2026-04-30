import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consequences',
  imports: [NgFor],
  templateUrl: './consequences.html',
  styleUrl: './consequences.scss',
})
export class Consequences {
  items = [
    {
      icon: '💔',
      title: 'Accidentes con víctimas',
      text: 'Un solo segundo de imprudencia puede cambiar la vida de una persona para siempre — o quitársela.',
    },
    {
      icon: '💸',
      title: 'Sanciones económicas',
      text: 'Las multas en Colombia por infracciones de tránsito superan el salario mínimo diario. No vale la pena el "ahorro" de tiempo.',
    },
    {
      icon: '⚖️',
      title: 'Responsabilidad legal',
      text: 'Causar un accidente por irrespeto a las normas puede derivar en cargos penales, suspensión de licencia y demandas civiles.',
    },
    {
      icon: '😔',
      title: 'Trauma psicológico',
      text: 'Los involucrados en accidentes — víctimas y conductores — sufren secuelas emocionales que pueden durar años.',
    },
    {
      icon: '🌀',
      title: 'Caos e impunidad',
      text: 'Cuando uno infringe, otros lo imitan. Una pequeña infracción normaliza el desorden y degrada la convivencia de todos.',
    },
    {
      icon: '📉',
      title: 'Daño a la imagen universitaria',
      text: 'Los accidentes frente a Uniminuto afectan la percepción pública de la institución y de sus estudiantes.',
    },
  ];
}
