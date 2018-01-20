require(['a', 'b'], function (a, b) {
  a.afn();
  b.bfn();
}, function (err) {
  console.log(err);
});