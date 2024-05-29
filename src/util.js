export function response(h, message, code ) {
  const res = h.response(message);
  // force change string to int using +
  res.code(+code);
  return res;
}

export const KERING_LOW = 3277;
export const KERING_HIGH = 4096;
export const BERAIR = 819;
export const TERLALU_LEMBAP_LOW =  BERAIR + 1;
export const TERLALU_LEMBAP_HIGH = 1638;
export const LEMBAP_LOW = TERLALU_LEMBAP_HIGH + 1;
export const LEMBAP_HIGH = 2457;
export const AGAK_LEMBAP_LOW = 2457;
export const AGAK_LEMBAP_HIGH = 3276;
