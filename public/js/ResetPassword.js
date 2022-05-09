$(document).ready(function () {
    $("#reset").click(function(){
        var userEmail = $("#email").val();
            token = $("#token").val();
            password = $("#password").val();
            passwordRepeat = $("#password-repeat").val();

        if(password !== '' && passwordRepeat !== ''){
            if((password === $("#password-repeat").val())){
                $.ajax({
                url: window.api + "users/resetpassword",
                data: {
                    data: {
                        type: "users",
                        attributes: {
                            email: userEmail,
                            token: token,
                            password: password
                        }
                    }
                },
                type: "POST",
                dataType: "json",
                })
                .done(function(resp) {
                    console.log(resp);
                    setTimeout((function() {
                        document.getElementById("errormessage").style = "display:none";
                        document.getElementById("successmessage").style = "display:block";
                        document.getElementById("password").value = '';
                        document.getElementById("password-repeat").value = '';
                    }
                    ), 200);
                    $("#successmessage").html(resp);
                })
                .fail(function( xhr, status, errorThrown ) {
                    // console.log( "Error: " + errorThrown );
                    // console.log( "Status: " + status );
                    // console.dir( xhr.responseJSON );
                    var errorMessage = xhr.responseJSON.data.attributes.message;
                    setTimeout((function() {
                        document.getElementById("successmessage").style = "display:none";
                        document.getElementById("errormessage").style = "display:block";
                    }
                    ), 200);
                    $("#errormessage").html(errorMessage);
                })
                .always(function( xhr, status ) {
                    // console.log(status);
                });
            } else setTimeout((function() {
                        document.getElementById("successmessage").style = "display:none";
                        document.getElementById("errormessage").style = "display:block";
                        $("#errormessage").html('Passwords do not match');
                    }
                ), 200);
        } else setTimeout((function() {
                        document.getElementById("successmessage").style = "display:none";
                        document.getElementById("errormessage").style = "display:block";
                        $("#errormessage").html('Password fields and repeat password are blank');
                    }
                ), 200);
            
    });
})