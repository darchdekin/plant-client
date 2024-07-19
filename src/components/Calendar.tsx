import axios from "axios";
import { useState, useEffect } from "react";
import { WateringSchedule } from "../interfaces";

import { Plant } from "../interfaces";

import CalendarSquare from "./CalendarSquare";
import DailyPlantList from "./DailyPlantList";

function Calendar() {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<WateringSchedule>(
    {} as WateringSchedule
  );

  // Variables to hold values for the daily watering list
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [date, setDate] = useState<String>();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_BASE_URL + "/plants/get_schedule")
      .then((response) => {
        setSchedule(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Set values for the daily watering list
  function todaysPlants(plants?: Plant[], date?: Number) {
    plants && setPlantList(plants);
    date &&
      setDate(months[schedule.month.valueOf()].concat(" ", date.toString()));
  }

  return (
    <div className="d-flex justify-content-center my-4">
      {loading && <div>Loading</div>}
      {!loading && (
        <div
          className="card col-md-8"
          style={{
            height: "fit-content",

            width: "100%",
          }}
        >
          <div className="card-header">
            <h1>Watering schedule</h1>
            <h2 className="text-end">
              {months[schedule.month.valueOf()]} {schedule.year.toString()}
            </h2>
          </div>

          <div
            className="card-body d-grid align-items-end"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              width: "100%",
            }}
          >
            {[...Array(schedule.first_day)].map(() => (
              <CalendarSquare handler={() => {}} />
            ))}
            {schedule.schedule.map((plants, index) => (
              <CalendarSquare
                plants={plants}
                day={index + 1}
                handler={todaysPlants}
              />
            ))}
          </div>
          <div className="card-body collapse" id="plantList">
            <DailyPlantList plants={plantList} date={date} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
