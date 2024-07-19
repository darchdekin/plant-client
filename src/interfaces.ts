export interface Plant {
  id: Number;
  name?: String;
  species: String;
  date?: String;
  image_url?: string;
  watering_frequency?: Number;
}

export interface WateringSchedule {
  month: Number;
  year: Number;
  first_day: Number;
  schedule: Plant[][];
}
