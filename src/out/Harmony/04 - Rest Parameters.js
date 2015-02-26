require("traceur-runtime");
var stuffToLog = ["INFO", "Booting up", "Ready", "Invalid login attempt", "Shutting down"];
console.log("ES5 Way:\n");
function logWithTag5(tag) {
  var logs = [].slice.call(arguments, 1);
  logs.forEach(function(log) {
    console.log(tag + ': ' + log);
  });
}
logWithTag5.apply((void 0), $traceurRuntime.spread(stuffToLog));
console.log("\n\nES6 Way:\n");
function logWithTag6(tag) {
  for (var logs = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    logs[$__0 - 1] = arguments[$__0];
  logs.forEach(function(log) {
    console.log(tag + ': ' + log);
  });
}
logWithTag6.apply((void 0), $traceurRuntime.spread(stuffToLog));
console.log("\n\nES6 Short Way:\n");
var logWithTag6Short = (function(tag) {
  for (var logs = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    logs[$__1 - 1] = arguments[$__1];
  return logs.forEach((function(log) {
    return console.log(tag + ': ' + log);
  }));
});
logWithTag6Short.apply((void 0), $traceurRuntime.spread(stuffToLog));
