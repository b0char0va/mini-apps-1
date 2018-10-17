$(document).ready(function () {

    // $('#submit').click(function(e) {
    //     e.preventDefault();
    //     var input = $('#text').val();
    //     var data = JSON.parse(input);
    //     serverRequests.create(data, modifyHTML.show);
    // });

    // $("#file").change(function() {
    //     serverRequests.create(data, modifyHTML.show);
    // });


    $("#submit").click(function(evt) {
        evt.preventDefault();
        var form = $('#fileinfo');
        var formData = new FormData(form[0]);
        // console.log("hi");
        // console.log(formData);
        serverRequests.create(formData);
    });

});

var modifyHTML = {
    show: function(data){
        $("#output").text(data);
    }
};


// var serverRequests = {
//
//     create: function(obj, successCB) {
//         $.ajax({
//             type: "POST",
//             url: 'http://localhost:3000',
//             data: JSON.stringify(obj),
//             contentType:"application/json",
//             success: successCB,
//             error: (err)=> {
//                console.log(err);
//            }
//         })
//     }
// };


var serverRequests = {

    create: function(obj) {
        $.ajax({
            type: 'POST',
            data: obj,
            async: false,
            cache: false,
            contentType: false,
            enctype: 'multipart/form-data',
            processData: false,
            success: function (response) {
                console.log(response);
            }
        })
    }
};


// [{"firstname": "mona", "lastname": "bocharova"}]

