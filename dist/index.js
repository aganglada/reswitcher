var executeIfFunction = function executeIfFunction(f) {
  return typeof f === 'function' ? f() : f;
};
var switchCase = function switchCase(cases) {
  return function (defaultCase) {
    return function (key) {
      return key in cases ? cases[key] : defaultCase;
    };
  };
};
var index = (function (cases) {
  return function (defaultCase) {
    return function (key) {
      return executeIfFunction(switchCase(cases)(defaultCase)(key));
    };
  };
});

export default index;
