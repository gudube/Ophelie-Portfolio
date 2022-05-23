import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
	selector: 'app-page-expositions',
	templateUrl: './page-expositions.component.html',
	styleUrls: ['./page-expositions.component.scss'],
})
export class PageExpositionsComponent {
	@ViewChild('container') container!: ElementRef;

	@ViewChild('dateSlider') slider!: MatSlider;

	@ViewChild('2020') container2020!: ElementRef;

	@ViewChild('2019') container2019!: ElementRef;

	@ViewChild('2018') container2018!: ElementRef;

	@ViewChild('2017') container2017!: ElementRef;

	@ViewChild('2016') container2016!: ElementRef;

	@ViewChild('2015') container2015!: ElementRef;

	@ViewChild('2014') container2014!: ElementRef;

	@ViewChild('2013') container2013!: ElementRef;

	@ViewChild('2012') container2012!: ElementRef;

	@ViewChild('2006') container2006!: ElementRef;

	@ViewChild('2003') container2003!: ElementRef;

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
		const percentage = Math.min(positionPx / fullHeight, 1);
		this.sliderValue = 1 - percentage;
		// eslint-disable-next-line no-underscore-dangle
		this.labelPos = percentage * (this.slider._elementRef.nativeElement.scrollHeight - 17);
		this.disabled = false;

		if (percentage === 1) {
			this.labelYear = '03';
			return;
		}

		const offset = window.pageYOffset + window.innerHeight / 2;
		if (offset < this.container2019.nativeElement.offsetTop) { this.labelYear = '20'; } else
		if (offset < this.container2018.nativeElement.offsetTop) { this.labelYear = '19'; } else
		if (offset < this.container2017.nativeElement.offsetTop) { this.labelYear = '18'; } else
		if (offset < this.container2016.nativeElement.offsetTop) { this.labelYear = '17'; } else
		if (offset < this.container2015.nativeElement.offsetTop) { this.labelYear = '16'; } else
		if (offset < this.container2014.nativeElement.offsetTop) { this.labelYear = '15'; } else
		if (offset < this.container2013.nativeElement.offsetTop) { this.labelYear = '14'; } else
		if (offset < this.container2012.nativeElement.offsetTop) { this.labelYear = '13'; } else
		if (offset < this.container2006.nativeElement.offsetTop) { this.labelYear = '12'; } else
		if (offset < this.container2003.nativeElement.offsetTop) { this.labelYear = '06'; } else { this.labelYear = '03'; }
	}

	public updateScrollPos(value: number): void {
		const fullHeight = this.container.nativeElement.scrollHeight;
		const positionPx = (1 - value) * fullHeight + this.container.nativeElement.offsetTop;
		window.scrollTo(0, positionPx);
	}
}
