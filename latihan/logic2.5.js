var n = 9;

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x > n - y) {
      document.write("&nbsp" + "😎");
    } else {
      document.write("&nbsp" + "🙄");
    }
  }
  document.write("<br>");
}
