import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  BrickWall,
  Cloud,
  LucideAngularModule,
  Mountain,
  TreePalm,
  Trees,
  Wheat,
} from 'lucide-angular';
import { RESOURCE_ASSETS } from '../../configs/resource-assets.config';
import { Tile } from '../../services/map-generator.service';

@Component({
  selector: 'app-catan-map',
  imports: [LucideAngularModule],
  templateUrl: './catan-map.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatanMap {
  readonly tiles = input.required<Tile[]>();
  readonly rows = input.required<number[]>();

  readonly resourceAssets = RESOURCE_ASSETS;

  readonly icons = {
    wood: Trees,
    brick: BrickWall,
    wheat: Wheat,
    sheep: Cloud,
    ore: Mountain,
    desert: TreePalm,
  };

  getTilesForRow(rowIndex: number): Tile[] {
    const layout = this.rows();
    const startIndex = layout
      .slice(0, rowIndex)
      .reduce((acc, val) => acc + val, 0);
    return this.tiles().slice(startIndex, startIndex + layout[rowIndex]);
  }

  getResourceColor(resource: string): string {
    const mapping: Record<string, string> = {
      wood: 'bg-emerald-700',
      brick: 'bg-orange-700',
      wheat: 'bg-amber-400',
      sheep: 'bg-lime-500',
      ore: 'bg-slate-400',
      desert: 'bg-yellow-200',
    };
    return mapping[resource] || 'bg-gray-300';
  }
}
