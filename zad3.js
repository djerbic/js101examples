var n = 7;

for (var i = 1; i < n; i++) {
  console.log(i*i + " ");
}

for (var i = n; i >= 1; i--) {
  if (i%2 === 0) {
    console.log(i*i + " ");
  }
}