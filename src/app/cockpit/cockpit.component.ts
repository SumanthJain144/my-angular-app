import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() onServerAdded = new EventEmitter<{ name: string, content: string }>();
  @Output('onBpAdded') onBluePrintAdded = new EventEmitter<{ name: string, content: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.onServerAdded.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBluePrint() {
    this.onBluePrintAdded.emit({name: this.newServerName, content: this.newServerContent});
  }

}
