export interface CarLocation {
  platesNumber: string,
  sideNumber: string,
  color: string,
  type: string,
  rangeKm: number,
  batteryLevelPct: number,
  reservationEnd: null,
  reservation: null,
  status: string,
  locationDescription: string,
  address: string,
  mapColor: {
    rgb: string,
    alpha: number
  },
  promotion: string,
  name: string,
  description: string,
  location: {
    latitude: number,
    longitude: number
  },
}
