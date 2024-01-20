export type Location = {
  coords: Coords;
  mocked: boolean;
  provider: string;
  timestamp: number;
};

export type Coords = {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
};
