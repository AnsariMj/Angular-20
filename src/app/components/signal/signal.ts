import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-signal',
    imports: [],
    templateUrl: './signal.html',
    styleUrl: './signal.scss',
})
export class Signal {
    firstName: string = 'MJ Ansari';
    courseName = signal<string>('Angular');
    coursrDuration = signal('3 months');

    //computed signal(its not normal signal)
    courseDetails = computed(()=>
      this.courseName()+ " - "+ this.coursrDuration()
    )
    constructor(){
      this.firstName ="MJ Ansari"
      console.log(this.firstName)
      this.courseName.set("React");

      // setTimeout(() => {
      //   this.courseName.set("Java");
      // }, 3000);
      console.log(this.courseName())
    }
}
