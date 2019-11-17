import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectedFeature = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
  }
}
