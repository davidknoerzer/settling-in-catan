export interface ResourceAsset {
  color: string;
  icon: string;
  label: string;
}

export const RESOURCE_ASSETS: Record<string, ResourceAsset> = {
  wood: {
    color: 'bg-emerald-700',
    icon: 'trees',
    label: 'Forest',
  },
  brick: {
    color: 'bg-orange-700',
    icon: 'bricks',
    label: 'Hills',
  },
  wheat: {
    color: 'bg-amber-400',
    icon: 'wheat',
    label: 'Fields',
  },
  sheep: {
    color: 'bg-lime-500',
    icon: 'cloud',
    label: 'Pasture',
  },
  ore: {
    color: 'bg-slate-400',
    icon: 'mountain',
    label: 'Mountains',
  },
  desert: {
    color: 'bg-yellow-200',
    icon: 'sun',
    label: 'Desert',
  },
};
