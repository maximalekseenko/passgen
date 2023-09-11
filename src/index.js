gui = require('nw.gui');
gui.Window.get().showDevTools();

$(function() 
{
    $( ".button-gen-new" ).on( "click", function() {
        $( ".text-pass-new" ).html(GenNew());
    })
});