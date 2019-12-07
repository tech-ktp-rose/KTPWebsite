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

    $.ajax({
        url: dataBaseURL + "textFields/" + "greetingText",
        type: 'get',
        success: (textField) => {
            $("#greetingTextField").val(textField.text);
        }
    });

    $('#greetingTextSubmit').on('click', function () {
        const newGreetings = $("#greetingTextField").val();
        $.ajax({
            url: dataBaseURL + "textFields/" + "greetingText",
            type: 'put',
            dataType: "JSON",
            data: {
                text: newGreetings
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

    $('#newEventSubmit').on('click', function () {
        const eventName = $("#newEventName").val();
        const eventLocation = $("#newEventLocation").val();
        const eventDescription = $("#newEventDescription").val();
        const eventDate = $("#newEventDate").val();
        $.ajax({
            url: dataBaseURL + "eventEntries",
            type: 'post',
            dataType: "JSON",
            async: false,
            data: {
                name: eventName,
                description: eventDescription,
                location: eventLocation,
                date: eventDate
            },
            success: (textField) => {
                console.log("Success");
            },
            error: (req, status, err) => {
                console.log("Failure");
            }
        });
    });

})();