import humadity from "./humadity.js";
import { AGAK_LEMBAP_HIGH, AGAK_LEMBAP_LOW, BERAIR, KERING_HIGH, KERING_LOW, LEMBAP_HIGH, LEMBAP_LOW, TERLALU_LEMBAP_HIGH, TERLALU_LEMBAP_LOW, response } from "./util.js";

const updateHumadity = (req, h) => {
  /**
   * indikator kelembapan memasukan angka, untuk algoritma nya mulai dari
   * Kering banget: 4096 --> 
   */
  const { indikator_kelembapan, key, kelembapan } = req.payload;
  let tingkat_kelembapan;
  let koneksi;

  if(indikator_kelembapan >= KERING_LOW && indikator_kelembapan <= KERING_HIGH) {
    tingkat_kelembapan = 'Kering';
  } else if(indikator_kelembapan >= AGAK_LEMBAP_LOW && indikator_kelembapan <= AGAK_LEMBAP_HIGH) {
    tingkat_kelembapan = 'Agak Lembab';
  } else if(indikator_kelembapan >= LEMBAP_LOW && indikator_kelembapan <= LEMBAP_HIGH) {
    tingkat_kelembapan = 'Lembab';
  } else if(indikator_kelembapan >= TERLALU_LEMBAP_LOW && indikator_kelembapan <= TERLALU_LEMBAP_HIGH) {
    tingkat_kelembapan = 'Terlalu Lembab';
  } else if (indikator_kelembapan >= 0 && indikator_kelembapan <= BERAIR) {
    tingkat_kelembapan = 'Berair';
  } else {
    tingkat_kelembapan = 'Tidak Valid';
  }

  if(key == "1234567890") {
    koneksi = 'koneksi user';
  } else if(key == "koneksiESP32") {
    koneksi = 'koneksi ESP32';
  } else {
    return response(h, {
      status: 'error',
      message: 'key tidak valid',
    }, 401);
  }

  const updated_at = new Date().toISOString();

  if (humadity.length !== 0) {
    humadity[0] = {
      ...humadity[0],
      indikator_kelembapan,
      tingkat_kelembapan,
      kelembapan,
      koneksi,
      updated_at,
    };
  } else {
    humadity.push({
      indikator_kelembapan,
      tingkat_kelembapan,
      kelembapan,
      koneksi,
      inserted_at: updated_at,
      updated_at,
    });
  }

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
