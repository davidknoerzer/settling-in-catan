import { Injectable } from '@angular/core';
import { GameType } from '../models/enums/GameType';

export interface Tile {
  resource: 'wood' | 'wheat' | 'sheep' | 'brick' | 'ore' | 'desert';
  number: number | null;
}

@Injectable({ providedIn: 'root' })
export class MapGeneratorService {
  private readonly CONFIGS = {
    [GameType.ORIGINAL]: {
      resources: [
        'desert',
        'wood',
        'wood',
        'wood',
        'wood',
        'wheat',
        'wheat',
        'wheat',
        'wheat',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'brick',
        'brick',
        'brick',
        'ore',
        'ore',
        'ore',
      ],
      numbers: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    },
    [GameType.EXTENSION]: {
      resources: [
        'desert',
        'desert',
        'wood',
        'wood',
        'wood',
        'wood',
        'wood',
        'wood',
        'wheat',
        'wheat',
        'wheat',
        'wheat',
        'wheat',
        'wheat',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'brick',
        'brick',
        'brick',
        'brick',
        'brick',
        'ore',
        'ore',
        'ore',
        'ore',
        'ore',
      ],
      numbers: [
        2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9, 10, 10, 10,
        11, 11, 11, 12, 12,
      ],
    },
  };

  generateMap(type: GameType): Tile[] {
    const config = this.CONFIGS[type];

    const shuffledResources = this.shuffle([...config.resources]);
    const shuffledNumbers = this.shuffle([...config.numbers]);

    let numberIndex = 0;
    return shuffledResources.map((res): Tile => {
      if (res === 'desert') {
        return { resource: 'desert', number: null };
      }
      return {
        resource: res as Tile['resource'],
        number: shuffledNumbers[numberIndex++],
      };
    });
  }

  private shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
