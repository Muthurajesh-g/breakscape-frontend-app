export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Destination {
  id: number;
  name: string;
  tagline: string;
  description: string;
  category_id: number;
  drive_time_hours: number;
  distance_km: number;
  image_url: string;
  wiki_url?: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: number | null;
  maxDriveTime: number;
}
