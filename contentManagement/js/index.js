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
        const newTitle = $("#pageTitleField").val();
        $.ajax({
            url: dataBaseURL + "textFields/" + "homePageTitle",
            type: 'put',
            dataType: "JSON",
            data: {
                text: newTitle
            },
            success: (textField) => {
                console.log("Success");
            },
            error: (req, status, err) => {
                console.log("Failure");
            }
        });

        return false;
    });

})();