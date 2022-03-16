var n = 9;

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x == n - y - -1) {
      document.write(y * 2 - 2);
    } else {
      document.write("___");
    }
  }
  document.write("<br>");
}
