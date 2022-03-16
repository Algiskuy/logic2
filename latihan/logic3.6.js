var n = 9;

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x == y) {
      document.write(x * 2 - 1);
    } else if (x == n - y - -1) {
      document.write(y * 2 - 2);
    } else if ((x <= 5 && y < x) || (x > 5 && y < 10 - x)) {
      document.write("A");
    } else if ((x <= 5 && 10 < x + y) || (x > 5 && x < y)) {
      document.write("B");
    } else {
      document.write("--");
    }
  }
  document.write("<br>");
}
