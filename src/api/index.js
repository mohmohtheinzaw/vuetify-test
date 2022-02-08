
const host = "http://localhost:3000";
import Promise from "core-js-pure/features/promise";

const loginUser = function (email, password) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let body = {
      email,
      password,
    };

    let options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };

    fetch(host + "/users/login", options)
      .then((response) => {
        // Checking errors
        if (response.status !== 200) {
          reject();
        } else {
          return response.json();
        }
      })
      .then((result) => {
        // Gettng datas
        resolve(result);
      })
      .catch((err) => {
        // Request error
        reject(err);
      });
  });
};

export { loginUser }
