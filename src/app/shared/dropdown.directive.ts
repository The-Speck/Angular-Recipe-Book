import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private elRef: ElementRef, private render: Renderer2) {}

    @HostListener('click')
    toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}