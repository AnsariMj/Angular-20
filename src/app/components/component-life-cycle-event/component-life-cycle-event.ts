import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle-event',
  imports: [],
  templateUrl: './component-life-cycle-event.html',
  styleUrl: './component-life-cycle-event.scss'
})
export class ComponentLifeCycleEvent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  /**
   *
   */
  constructor() {
    console.log("constructor");
  }
  ngOnChanges(): void { debugger; console.log("ngOnChanges"); }

  ngOnInit(): void {
    console.log("ngOnInit");
    // is used to trigger API calls
    // to subscribe
  }

  ngAfterContentInit(): void { console.log("ngAfterContentInit"); }

  ngAfterContentChecked(): void { console.log("ngAfterContentChecked"); }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    // to deal with viewChild
    // some time it may required to subscribe but not frequently
  }

  ngAfterViewChecked(): void { console.log("ngAfterViewChecked"); }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    // is used to unsubscribe
    // restrict somethings which is currently use by any component before navigation to another one
  }
}
