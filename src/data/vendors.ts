export interface Vendor {
  type: string;
  slug: string;
}

export const vendors: Vendor[] = [
  {
    type: 'Venues',
    slug: 'venues',
  },
  {
    type: 'Photographers',
    slug: 'photographers',
  },
  {
    type: 'Planners',
    slug: 'planners',
  },
];