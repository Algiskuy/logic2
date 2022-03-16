var n = 9;

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x == y) {
      document.write(x * 2 - 1);
    } else {
      document.write("___");
    }
  }
  document.write("<br>");
}
//😎🙄
