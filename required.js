function getList(){
    $( "#target" ).val("");
    $( "#model-name" ).popup( "open" );
    
}
function populateValue(){
    $("ul>li").click(function () {
                     $("#target").val($(this).text());
                     $( "#model-name" ).popup( "close" )
                     });
}