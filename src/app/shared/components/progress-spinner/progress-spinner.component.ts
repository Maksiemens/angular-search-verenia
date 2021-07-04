import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
