import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/models/picture-model';
import { SpotlightModel } from 'src/app/ui-tools/spotlight-item/spotlight-model';
import danses from 'src/assets/danses.json';

@Component({
	selector: 'app-page-choreo',
	templateUrl: './page-choreo.component.html',
	styleUrls: ['./page-choreo.component.scss'],
})
export class PageChoreoComponent {
	// fileName: corresponds au fichier dans le dossier assets/. Doit être .jpg et/ou .webp
	// title: Titre qui apparait sur l'image
	// subtitle: facultatif (peut être vide avec ''). ajoute du texte en plus petit sous le titre
	// description: description visible lorsqu'on clique sur l'image
	public projets: SpotlightModel[] = danses;

	public centerItem: CarouselItem = {
		title: 'PEINTURES',
		image: 'assets/peintures/p8.jpg',
		cadre: 'assets/arts-visuels/cadre.png',
		url: 'peintures/',
	}

	public rightItem: CarouselItem = {
		title: 'SCULPTURES',
		image: 'assets/sculptures/abeille1.jpg',
		cadre: 'assets/arts-visuels/cadre.png',
		url: 'sculptures/',
	}

	public leftItem: CarouselItem = {
		title: 'DESSINS',
		image: 'assets/dessins/d8.jpg',
		cadre: 'assets/arts-visuels/cadre.png',
		url: 'dessins/',
	}
}
