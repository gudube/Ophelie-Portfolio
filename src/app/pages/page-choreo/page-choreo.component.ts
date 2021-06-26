import { Component, OnInit } from '@angular/core';
import { SpotlightModel } from 'src/app/ui-tools/spotlight-item/spotlight-model';

@Component({
	selector: 'app-page-choreo',
	templateUrl: './page-choreo.component.html',
	styleUrls: ['./page-choreo.component.scss'],
})
export class PageChoreoComponent implements OnInit {
	// fileName: corresponds au fichier dans le dossier assets/. Doit être .jpg et/ou .webp
	// title: Titre qui apparait sur l'image
	// subtitle: facultatif (peut être vide avec ''). ajoute du texte en plus petit sous le titre
	// description: description visible lorsqu'on clique sur l'image
	public projets: SpotlightModel[] = [
		{ fileName: 'projets/etoiles', title: 'TENTER DE VOIR A NOUVEAU LES ETOILES', subtitle: '', description: '' },
		{ fileName: 'projets/peut_etre', title: 'J\'HABITE QUELQUE PART DANS UN PULL', subtitle: '', description: '' },
		{ fileName: 'projets/chambre', title: 'JUSTE UNE IMPRO UN JOUR ORDINAIRE', subtitle: '', description: '' },
		{ fileName: 'projets/cornes', title: 'PROFITES DE L\'ETRANGETE DU CALME POUR RESPIRER', subtitle: '', description: '' },
		{ fileName: 'projets/fuir', title: 'LORSQUE L\'ON VEUT FUIR..', subtitle: '', description: '' },
		{ fileName: 'projets/peu_importe', title: 'PEU IMPORTE', subtitle: '', description: '' },
		{ fileName: 'projets/murs_fondent', title: 'LES MURS FONDENT ENTRE MES DOIGTS LORSQUE JE FERME LES YEUX', subtitle: '', description: '' },
		{ fileName: 'projets/sans_titre_6', title: 'SANS TITRE #6', subtitle: '', description: '' },
		{ fileName: 'projets/sans_titre_4', title: 'SANS TITRE #4', subtitle: '', description: '' },
	];

	constructor() { }

	ngOnInit(): void {
	}
}
