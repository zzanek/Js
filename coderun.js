/// runner.js
javascript: window.onkeydown = function(event) { if (event.keyCode === 192) { javascript: (function() { var code = prompt("Enter JavaScript code to run:"); if (code && code.trim()) { var script = document.createElement('script'); script.textContent = code; document.body.appendChild(script); } })(); }};
