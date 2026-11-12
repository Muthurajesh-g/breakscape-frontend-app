const API_BASE_URL = 'https://breakscape-backend-1.onrender.com';

export interface Destination {
  id: number;
  name: string;
  tagline: string;
  description: string;
  hub_id: number;
  category_id: number;
  drive_time_hours: number;
  distance_km: number;
  image_url: string;
  wiki_url?: string;
}

export async function fetchDestinations(
  hubName?: string
): Promise<Destination[]> {
  try {
    const url = hubName
      ? `${API_BASE_URL}/api/destinations?hub_name=${encodeURIComponent(
          hubName
        )}`
      : `${API_BASE_URL}/api/destinations`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch destinations:', error);
    return [];
  }
}
