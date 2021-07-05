import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  @Input() selected = '';
  @Input() selectOptionList!: string[];
  @Output() selectionChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  trackByIndex(index: number, item: string): number {
    return index;
  }

  onSelectionChange(event: MatSelectChange): void {
    this.selectionChange.emit(event.value);
  }
}
