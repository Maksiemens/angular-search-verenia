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
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryCardComponent implements OnInit {
  @Input() repository!: Repository;
  @Output() toggleToFavorite = new EventEmitter<Repository>();

  get buttonText(): string {
    return this.repository.isFavorite ? 'Remove from' : 'Add to';
  }

  constructor() {}

  ngOnInit(): void {}

  onToggleToFavorite(repository: Repository): void {
    this.toggleToFavorite.emit(repository);
  }
}
