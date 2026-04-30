import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { StatsBar } from './components/stats-bar/stats-bar';
import { WhyMatters } from './components/why-matters/why-matters';
import { Consequences } from './components/consequences/consequences';
import { AccidentScene } from './components/accident-scene/accident-scene';
import { Rules } from './components/rules/rules';
import { QuoteBanner } from './components/quote-banner/quote-banner';
import { Commitment } from './components/commitment/commitment';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, StatsBar, WhyMatters, Consequences, AccidentScene, Rules, QuoteBanner, Commitment, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
