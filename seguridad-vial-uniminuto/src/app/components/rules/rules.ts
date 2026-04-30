import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rules',
  imports: [NgFor],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class Rules {
  rules = [
    { icon: '🔴', text: 'Respetar semáforos en rojo' },
    { icon: '🦓', text: 'Ceder el paso en cebras' },
    { icon: '🅿️', text: 'No parquear en zonas prohibidas' },
    { icon: '🏃', text: 'Usar andenes y pasos peatonales' },
    { icon: '📵', text: 'No usar el celular al conducir' },
    { icon: '🚗', text: 'Respetar límites de velocidad' },
    { icon: '🔊', text: 'No usar pito innecesariamente' },
    { icon: '🔄', text: 'Respetar sentidos viales' },
    { icon: '⛔', text: 'No invadir ciclovías' },
    { icon: '🛑', text: 'Detenerse en señales de PARE' },
  ];
}
