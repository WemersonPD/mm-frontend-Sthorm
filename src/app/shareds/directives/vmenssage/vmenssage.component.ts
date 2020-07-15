import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vmenssage',
  templateUrl: './vmenssage.component.html',
  styleUrls: ['./vmenssage.component.scss']
})
export class VmenssageComponent implements OnInit {
  @Input() text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
