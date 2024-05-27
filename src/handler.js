import humadity from "./humadity.js";
import { response } from "./util.js";

const updateHumadity = (req, h) => {
  const { tingkat_kelembapan, lembap, koneksi } = req.payload;

  const updated_at = new Date().toISOString();

  if (humadity.length === 0) {
    humadity.push({
      tingkat_kelembapan,
      lembap,
      koneksi,
      inserted_at: updated_at,
      updated_at,
    });
  }

  humadity[0] = {
    ...humadity[0],
    tingkat_kelembapan,
    lembap,
    koneksi,
    updated_at,
  };

  return response(h, {
    status: 'success',
    message: 'success update humadity data',
    updated_at
  }, 200);
};

const getHumadity = () => {
  return {
    status: "success",
    data: humadity[0] ?? 'no data inserted',
  };
};

export { getHumadity, updateHumadity };
