/// runner.js
javascript:window.onkeydown = function(event) {   if (event.keyCode === 192) {      javascript:(function(){var code=prompt("Enter JavaScript code to run:");if(code){try{eval(code);}catch(e){alert("An error occurred while executing the code:\n"+e);}}else{alert("No code provided!");}})();   }};
