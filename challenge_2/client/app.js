$(document).ready(function () {

    $('#submit').click(function(e) {
        e.preventDefault();
        var input = $('#text').val();
        var data = JSON.parse(input);
        serverRequests.create(data, modifyHTML.show);
    });

});

var modifyHTML = {
    show: function(data){
        $("#output").text(data);
    }
};


var serverRequests = {

    create: function(obj, successCB) {
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000',
            data: JSON.stringify(obj),
            contentType:"application/json",
            success: successCB,
            error: (err)=> {
               console.log(err);
           }
        })
    }
};


// [{"firstname": "mona", "lastname": "bocharova"}]

