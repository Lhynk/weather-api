export interface GeoLocation {
  name: string;
  local_names: { string: string };
  lat: number;
  lon: number;
  country: string;
  state: string;
}
