import { getHumadity, updateHumadity } from "./handler.js";

const router = [
  {
    method: "POST",
    path: "/humadity",
    handler: updateHumadity,
  },
  {
    method: "GET",
    path: "/humadity",
    handler: getHumadity,
  },
  {
    method: "GET",
    path: "/",
    handler: () => {
      return {
        status: "Success",
        message: "Welcome To my API connected use ESP32 and NodeJS",
      };
    },
  },
];

export default router;
