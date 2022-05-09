$(document).ready(function () {
    $("#send").click(function(){
        var userEmail = $("#email").val();
        $.ajax({
        url: window.api + "users/forgotpassword",
        data: {
            data: {
                type: "users",
                attributes: {
                    email: userEmail,
                }
            }
        },
        type: "POST",
        dataType: "json",
        })
        .done(function(resp) {
            setTimeout((function() {
                document.getElementById("errormessage").style = "display:none";
                document.getElementById("successmessage").style = "display:block";
                document.getElementById("email").value = '';
            }
            ), 200);
            $("#successmessage").html(resp);
        })
        .fail(function( xhr, status, errorThrown ) {
            // console.log( "Error: " + errorThrown );
            // console.log( "Status: " + status );
            // console.dir( xhr.responseJSON.data.attributes.message );
            var errorMessage = xhr.responseJSON.data.attributes.message;
            setTimeout((function() {
                document.getElementById("successmessage").style = "display:none";
                document.getElementById("errormessage").style = "display:block"
            }
            ), 200);
            $("#errormessage").html(errorMessage);
        })
        .always(function( xhr, status ) {
            // console.log(status);
        });
    });
})