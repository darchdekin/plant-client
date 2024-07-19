import Calendar from "./components/Calendar";
import PostList from "./components/PostList";

function App() {
  console.log("API base URL: " + import.meta.env.VITE_API_BASE_URL2);
  return (
    <div className="container-md overflow-visible">
      <div className="row">
        <div className="col-12 col-lg-6 ">
          <div
            className="overflow-y-scroll d-none d-lg-block"
            style={{ height: "100vh" }}
          >
            <PostList />
          </div>
          <div className="d-block d-lg-none" id="postList">
            <PostList />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div
            className="overflow-y-scroll d-none d-lg-block pe-4"
            style={{ maxHeight: "100vh" }}
          >
            <Calendar />
          </div>
          <div className="d-block d-lg-none" id="calendar">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
