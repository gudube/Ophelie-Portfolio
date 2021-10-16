import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
	selector: 'app-page-couverture',
	templateUrl: './page-couverture.component.html',
	styleUrls: ['./page-couverture.component.scss'],
})
export class PageCouvertureComponent implements OnInit {
	@ViewChild('bgImage') bgImage!: ElementRef;

	@ViewChild('enterButton') enterButton!: ElementRef;

	@ViewChild('enterText') enterText!: ElementRef;

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	public enter(): void {
		this.bgImage.nativeElement.classList.add('disappear');
		this.enterText.nativeElement.classList.add('disappear');
		this.enterButton.nativeElement.classList.remove('hoverable');

		setTimeout(() => {
			this.router.navigate(['/accueil']);
		}, 200);
	}
}
