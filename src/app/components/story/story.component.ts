import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  title = "La Storia di Banca-rotta";
  story = [
    "Nel lontano 1920, un giovane visionario di nome Giovanni Speranza fondò la Banca-rotta con l'obiettivo di offrire servizi finanziari innovativi e accessibili a tutti.",
    "Nonostante le difficoltà economiche degli anni '30, la Banca-rotta è riuscita a crescere grazie alla fiducia e al supporto della comunità locale.",
    "Durante gli anni '60, la banca ha introdotto i primi sportelli automatici, rivoluzionando il modo in cui le persone gestivano i loro risparmi.",
    "Oggi, Banca-rotta è conosciuta non solo per la sua storia affascinante ma anche per il suo impegno verso la sostenibilità e l'innovazione tecnologica."
  ];
}
