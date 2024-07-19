import { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";

function PostList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_BASE_URL + "/plants/plants")
      .then((response) => {
        setPlants(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-4">
      {plants && (
        <>
          {plants.map((plant) => (
            <Post plant={plant} />
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
