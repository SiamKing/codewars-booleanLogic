function or(a, b) {
  if (a) { return true; }
  if (b) { return true; }
  return false;
};

function xor(a, b) {
  return Boolean(a) !== Boolean(b);
}
