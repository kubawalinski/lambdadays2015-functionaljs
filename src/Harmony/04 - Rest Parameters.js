require("traceur-runtime");

var stuffToLog = [
    "INFO",
    "Booting up",
    "Ready",
    "Invalid login attempt",
    "Shutting down"
];

// Let's write a function that takes a tag
// and an unknown number of log entries.
// The function is supposed to print each log entry
// to the console together with the tag.

console.log("ES5 Way:\n");
function logWithTag5(tag) {
    var logs = [].slice.call(arguments, 1);
    logs.forEach(function (log) {
        console.log(tag + ': ' + log);
    });
}
logWithTag5(...stuffToLog);

console.log("\n\nES6 Way:\n");
function logWithTag6(tag, ...logs) {
    logs.forEach(function (log) {
        console.log(tag + ': ' + log);
    });
}
logWithTag6(...stuffToLog);

console.log("\n\nES6 Short Way:\n");
var logWithTag6Short = (tag, ...logs) => logs.forEach(
    (log) => console.log(tag + ': ' + log)
);
logWithTag6Short(...stuffToLog);