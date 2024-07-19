import { Plant } from "../interfaces";

interface Props {
  day?: Number;
  plants?: Plant[];
  handler: (p?: Plant[], d?: Number) => void;
}

function CalendarSquare(props: Props) {
  function clickHandler() {
    props.handler(props.plants, props.day);
  }
  return (
    <div className="">
      {props.day && (
        <div className="card rounded-0">
          <div className="card-header d-none d-sm-inline">
            {props.day?.toString()}
          </div>

          <div className="card-body  d-none d-sm-block">
            <div className="ratio  ratio-1x1">
              {props.plants && props.plants.length > 0 && (
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-circle"
                  data-bs-toggle="collapse"
                  data-bs-target="#plantList"
                  aria-expanded="false"
                  aria-controls="plantList"
                  onClick={clickHandler}
                >
                  <p className="d-none d-sm-inline d-lg-none d-xl-inline">
                    {props.plants.length}
                  </p>
                </button>
              )}
            </div>
          </div>

          <div className="d-block d-sm-none d-flex ratio ratio-1x1">
            {props.plants && props.plants.length > 0 && (
              <button
                type="button"
                className="btn btn-outline-primary rounded-circle flex-fill"
                data-bs-toggle="collapse"
                data-bs-target="#plantList"
                aria-expanded="false"
                aria-controls="plantList"
                onClick={clickHandler}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

CalendarSquare.propTypes = {};

export default CalendarSquare;
