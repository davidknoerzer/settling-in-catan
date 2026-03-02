import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { GameType } from '../models/enums/GameType';
import { MapGeneratorService, Tile } from '../services/map-generator.service';
import { CatanMap } from './catan-map/catan-map';
@Component({
  selector: 'app-dashboard',
  imports: [CatanMap],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  readonly mapGeneratorService = inject(MapGeneratorService);
  GameType = GameType;
  mapOptions = signal([
    { id: GameType.ORIGINAL, label: 'Original' },
    { id: GameType.EXTENSION, label: 'Extension' },
  ]);

  selectedMode = signal(GameType.ORIGINAL);
  tiles = signal<Tile[]>(
    this.mapGeneratorService.generateMap(this.selectedMode())
  );

  rows = computed(() =>
    this.selectedMode() === GameType.ORIGINAL
      ? [3, 4, 5, 4, 3]
      : [3, 4, 5, 6, 5, 4, 3]
  );

  setMap(id: GameType) {
    this.selectedMode.set(id);
    this.generateNewMap();
  }

  generateNewMap() {
    const newTiles = this.mapGeneratorService.generateMap(this.selectedMode());
    this.tiles.set(newTiles);
  }
}
