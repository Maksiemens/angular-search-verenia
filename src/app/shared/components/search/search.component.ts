import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) public inputRef!: ElementRef;
  @Input() isLoading!: boolean;
  @Output() inputSearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.onInputSearch();
  }

  onInputSearch(): void {
    fromEvent(this.inputRef.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        filter((inputValue: string) => inputValue.length > 0),
        map((inputValue: string) => inputValue.trim()),
        debounceTime(1000),
        distinctUntilChanged(),
        untilDestroyed(this),
      )
      .subscribe((inputValue: string) => {
        console.log(inputValue);
        this.inputSearch.emit(inputValue);
      });
  }
}
