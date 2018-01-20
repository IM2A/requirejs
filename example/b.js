define(['c'], function (c) {
  const bfn = function () {
    console.log('my name is b');
    c.cfn();
  };

  return {
    bfn: bfn
  }
});