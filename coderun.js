/// runner.js
javascript:(function() {
    var code = prompt("Enter JavaScript code to run:");
    if (code) {
        try {
            eval(code);
        } catch (e) {
            alert("An error occurred while executing the code:\n" + e);
        }
    } else {
        alert("No code provided!");
    }
})();

