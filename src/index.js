const executeIfFunction = f => typeof f === 'function' ? f() : f;
const switchCase = cases => defaultCase => key => key in cases ? cases[key] : defaultCase;
export default cases => defaultCase => key => executeIfFunction(switchCase(cases)(defaultCase)(key));