export const authenticateUser = (login, password) => {
  return new Promise((resolve, reject) => {
    if (login === "admin" && password === "admin") {
      setTimeout(() => {
        resolve({
          name: "admin",
        });
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Cant find user");
      }, 1000);
    }
  });
};
