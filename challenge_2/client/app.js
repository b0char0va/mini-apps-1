$(document).ready(function () {

    $('#submit').click(function(e) {
        e.preventDefault();
        var input = $('#text').val();
        serverRequests.create({firstname: input});
    });

});

var serverRequests = {

    create: function(obj) {
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000',
            data: JSON.stringify(obj),
            contentType:"application/json",
            success: (data) => {
                console.log(data);
            },
            error: (err)=> {
               console.log(err);
           }
        })
    }
};

