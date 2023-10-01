gui = require('nw.gui');
// gui.Window.get().showDevTools();


function GenPass()
{
    $( '.generator-text-pass .pass-text' ).val(GeneratePass());
    $( '.generator-text-pass .pass-comment' ).val(GenerateComment());
    $( '.generator-button-save' ).prop('disabled', false);
}
function AddPass()
{
    $.get( "./passviewer.html" , function(_div_pass){
        
        _div_pass = $( _div_pass );
        $( ".pass-text", _div_pass ).val( $( '.generator-text-pass .pass-text' ).val() );
        $( ".pass-comment", _div_pass ).val( $( '.generator-text-pass .pass-comment' ).val() );
        
        $( ".viewer" ).append( _div_pass );
    });
}
function RemPass()
{
    $.get( "./divpass.html" , function(_div_pass){
        _div_pass = $( ".pass-comment", _div_pass).html(GenNew());
        $( ".div-show" ).append(_div_pass);
    });
}


function ShowPass(text)
{
    text.type = "text";
}

function HidePass(text)
{
    text.type = "password";
}