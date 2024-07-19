import { Plant } from "../interfaces";

interface Props {
  plant: Plant;
}

function Post(props: Props) {
  let plant: Plant = props.plant;
  return (
    <div
      className="card accordion accordion-flush mb-3 mx-auto"
      id={"plantPost" + plant.id.toString()}
      style={{ maxWidth: "30rem", height: "fit-content" }}
    >
      <div className="card-body pb-0">
        {" "}
        <img
          src={plant.image_url}
          className="rounded"
          alt={"Photo of " + props.plant.species}
          style={{ width: "100%" }}
        />
      </div>

      <div className="accordion-item">
        <div
          id={"plantInfo" + plant.id.toString()}
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <ul className="list-group">
              <li className="list-group-item">
                Species: <i>{plant.species}</i>
              </li>
              <li className="list-group-item">
                Watering frequency: Once every{" "}
                {plant.watering_frequency?.toString()} days
              </li>
              <li className="list-group-item">Date added: {plant.date}</li>
            </ul>
          </div>
        </div>

        <h2 className="accordion-header rounded-bottom">
          <button
            className="accordion-button collapsed rounded-bottom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#plantInfo" + plant.id.toString()}
            aria-expanded="false"
            aria-controls={"plantInfo" + plant.id.toString()}
          >
            <h4 className="h2 mb-0 w-100 text-end me-3">{plant.name}</h4>
          </button>
        </h2>
      </div>
    </div>
  );
}

export default Post;
