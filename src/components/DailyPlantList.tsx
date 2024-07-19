import { Plant } from "../interfaces";

interface Props {
  plants: Plant[];
  date?: String;
}

function DailyPlantList(props: Props) {
  return (
    <div>
      <h2 className="h3">Plants to water on {props.date}</h2>
      <ul className="list-group">
        {props.plants.map((plant) => (
          <li className="list-group-item">{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DailyPlantList;
