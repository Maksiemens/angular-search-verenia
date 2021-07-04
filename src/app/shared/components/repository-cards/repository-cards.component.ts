import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Repository } from '@app/shared/models/repository.model';

@Component({
  selector: 'app-repository-cards',
  templateUrl: './repository-cards.component.html',
  styleUrls: ['./repository-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryCardsComponent implements OnInit {
  @Input() repositories!: Repository[];
  @Output() toggleToFavorite = new EventEmitter<Repository>();

  constructor() {}

  ngOnInit(): void {}

  trackByIdFn(index: number, repository: Repository): number {
    return repository.id;
  }

  onToggleToFavorite(repository: Repository): void {
    this.toggleToFavorite.emit(repository);
  }
}
