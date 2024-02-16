/// ext.js
javascript:(function() {
    var extensionId = prompt('Enter the extension ID:');
    if (extensionId) {
        location.href = 'https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&prodversion=' + (navigator.appVersion.match(/Chrome\/(\S+)/)[1]) + '&x=id%3D' + (extensionId) + '%26installsource%3Dondemand%26uc';
    } else {
        alert('No extension ID provided.');
    }
})();
