import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ISlideInfo} from "../../get-started.page";

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['../../slide.scss'],
})
export class SlideComponent {
    @Input() slide: ISlideInfo;
    @Output() nextSlide$: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('upload', {static: false}) uploadRef: ElementRef;
    imagePreview: any = null;

    constructor() {
    }


    nextSlide(): void {
        this.nextSlide$.emit()
    }

    uploadImage(event: any) {
        const file = event.target.files[0];
        const fileReader: FileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (fileLoadedElement: any) => {
            this.imagePreview = fileLoadedElement.target.result;
        };
    }

    triggerUploadImage(): void {
        this.uploadRef.nativeElement.click();
    }
}
