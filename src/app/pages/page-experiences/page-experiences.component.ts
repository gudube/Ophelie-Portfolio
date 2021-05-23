import {
	Component, ElementRef, HostListener, ViewChild,
} from '@angular/core';
import { MatSlider } from '@angular/material/slider';

/* tslint:disable */
@Component({
	selector: 'app-page-experiences',
	templateUrl: './page-experiences.component.html',
	styleUrls: ['./page-experiences.component.scss'],
})
export class PageExperiencesComponent {
	@ViewChild('container') container!: ElementRef;

	@ViewChild('dateSlider') slider!: MatSlider;

	@ViewChild('2019') container2019!: ElementRef;

	@ViewChild('2018') container2018!: ElementRef;

	@ViewChild('2017') container2017!: ElementRef;

	@ViewChild('2016') container2016!: ElementRef;

	public sliderValue = 1;

	public labelPos = 0;

	public disabled = true;

	public labelYear = '20';

	constructor() { }

	@HostListener('window:scroll', ['$event'])
	private updateSliderPos() {
		const positionPx = window.pageYOffset - this.container?.nativeElement.offsetTop;
		if (positionPx < 0) {
			this.sliderValue = 1;
			this.labelPos = 0;
			this.disabled = true;
			this.labelYear = '20';
			return;
		}

		const fullHeight = this.container?.nativeElement.scrollHeight - window.innerHeight;
		let percentage = positionPx / fullHeight;
		this.sliderValue = 1 - percentage;
		if (percentage > 1) {
			percentage = 1;
		}
		// eslint-disable-next-line no-underscore-dangle
		this.labelPos = percentage * (this.slider._elementRef.nativeElement.scrollHeight - 17);
		this.disabled = false;

		if (window.pageYOffset < this.container2019.nativeElement.offsetTop - window.innerHeight / 1.5) { this.labelYear = '20'; } else if (window.pageYOffset < this.container2018.nativeElement.offsetTop - window.innerHeight / 1.5) { this.labelYear = '19'; } else if (window.pageYOffset < this.container2017.nativeElement.offsetTop - window.innerHeight / 1.5) { this.labelYear = '18'; } else if (window.pageYOffset < this.container2016.nativeElement.offsetTop - window.innerHeight / 1.5) { this.labelYear = '17'; } else { this.labelYear = '16'; }
	}

	public updateScrollPos(value: number): void {
		const fullHeight = this.container.nativeElement.scrollHeight;
		const positionPx = (1 - value) * fullHeight + this.container.nativeElement.offsetTop;
		window.scrollTo(0, positionPx);
	}
}
