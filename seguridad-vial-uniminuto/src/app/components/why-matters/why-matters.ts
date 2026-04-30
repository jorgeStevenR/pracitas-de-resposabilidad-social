import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-why-matters',
  imports: [NgFor],
  templateUrl: './why-matters.html',
  styleUrl: './why-matters.scss',
})
export class WhyMatters {
  cards = [
    {
      icon: '🎓',
      title: 'Alta concentración de peatones',
      text: 'Los horarios de entrada y salida de clases generan picos de tráfico peatonal extremos. Un conductor distraído o que no respeta el semáforo pone en riesgo a decenas de personas a la vez.',
    },
    {
      icon: '🛵',
      title: 'Circulación mixta y caótica',
      text: 'Motos, bicicletas, buses y peatones comparten el mismo espacio. Sin normas claras respetadas, el riesgo de colisión se multiplica exponencialmente.',
    },
    {
      icon: '🏙️',
      title: 'Zona de impacto social',
      text: 'Uniminuto forma ciudadanos comprometidos. Cómo nos comportamos en el tráfico frente a la universidad refleja directamente los valores que la institución promueve.',
    },
    {
      icon: '👶',
      title: 'Niños y adultos mayores',
      text: 'El barrio también es hogar de familias. Los más vulnerables — niños, adultos mayores y personas con discapacidad — dependen de que todos respetemos las señales.',
    },
  ];
}
