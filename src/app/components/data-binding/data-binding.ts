import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-data-binding',
    imports: [FormsModule],
    templateUrl: './data-binding.html',
    styleUrl: './data-binding.scss',
})
export class DataBinding {
    name: string = 'Angular JS';
    code: number = 30;
    isDisabled: boolean = false;

    maxlenght: number = 5;

    minChar: number = 5;

    MyClassName: string = 'myColor';

    radio: string = 'radio';
    checkbox: string = 'checkbox';
    switch: string = 'switch';
    color: string = 'color';
    date: string = 'date';
    datetime: string = 'datetime';
    email: string = 'email';
    month: string = 'month';
    number: string = 'number';
    range: string = 'range';
    search: string = 'search';
    tel: string = 'tel';
    text: string = 'text';
    time: string = 'time';
    url: string = 'url';
    week: string = 'week';
    
    public OnKeyUp(event: KeyboardEvent): void {
        this.name = (<HTMLInputElement>event.target).value;
    }

    showWelcomeMessage() {
        alert('Hey, there I am MJ Ansari');
    }

    changeCourserName(){
      this.name= 'React'
    }

    onProvinceChange(){
      alert("Province Changed")
    }
}
