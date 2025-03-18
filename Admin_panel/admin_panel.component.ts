import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  imports: [],
  templateUrl: './admin_panel.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AdminPanelComponent implements OnInit {

  ngOnInit(): void { }

}
