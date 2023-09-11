jQuery(function() 
{
    $( ".button-gen-new" ).on( "click", function() {
        $( ".text-pass-new" ).html = Gen();
    })
})