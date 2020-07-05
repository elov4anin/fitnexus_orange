import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-spin-class',
  templateUrl: './modal-spin-class.component.html',
  styleUrls: ['./modal-spin-class.component.scss'],
})
export class ModalSpinClassComponent implements OnInit {
  isToggled: boolean = false;

  constructor() { }

  ngOnInit() {}

}
