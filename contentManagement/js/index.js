(function(){
    const dataBaseURL = `http://localhost:3000/`;

    $.ajax({
        url: dataBaseURL + "textFields/" + "homePageTitle",
        type: 'get',
        success: (textField) => {
            $("#pageTitleField").val(textField.text);
        }
    });

    $('#pageTitleSubmit').on('click', function () {
        console.log("Hello");
        // $.ajax({
        //     url: dataBaseURL + "textFields/" + "homePageTitle",
        //     type: 'put',
        //     dataType: "JSON",
        //     data: {
        //         text: $("#pageTitleField").val()
        //     },
        //     success: (textField) => {
        //         debugger;
        //         console.log("Success");
        //     },
        //     error: (req, status, err) => {
        //         debugger;
        //         console.log(Failure);
        //     }
        // });
    });

})();