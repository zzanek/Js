javascript:(function(){
    var bookmarkletCode = prompt('Bookmarklet:');
    if(bookmarkletCode) {
        try {
            eval(bookmarkletCode);
        } catch(error) {
            alert('Error: ' + error);
        }
    }
})();
