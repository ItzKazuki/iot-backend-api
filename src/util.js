export function response(h, message, code ) {
  const res = h.response(message);
  // force change string to int using +
  res.code(+code);
  return res;
}