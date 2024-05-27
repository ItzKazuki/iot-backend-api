import { getHumadity, updateHumadity } from "./handler.js";

const router = [
  {
    method: 'POST',
    path: '/humadity',
    handler: updateHumadity
  },
  {
    method: 'GET',
    path: '/humadity',
    handler: getHumadity
  }
];

export default router;