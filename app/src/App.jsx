import React from "react";

import axios from "axios";

function App() {
  axios
    .get("http://localhost:80/api/courses")
    .then(res => console.log("courses", res))
    .then(() =>
      axios
        .get("http://localhost:80/api/users")
        .then(res => console.log("users", res))
    ).catch(err => console.log('error', err))

  return <div className="App">React App</div>;
}

export default App;
