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

    $.ajax({
        url:dataBaseURL + "eventEntries",
        type: 'GET',
        async: false,
        success: (events) => {
            if (events) {
                $.each(events, addEvents);
            } else {
                console.log("no events found")
            }
        }, 
        error: (req, status, error) => {
            console.log(error)
        }
    })

    function addEvents() {
        const container = document.createElement("div");
        containerDiv.class = "event";

        const name = document.createElement("h4");
        name.text = this.name;
        container.append(name);

        const location = document.createElement("p");
        location.text = this.location;
        container.append(location);
        
        const date = document.createElement("p");
        date.text = this.date;
        container.append(date);

        const description = document.createElement("p");
        description.text = this.description;
        container.append(description);

        $("#currentEvents").append(container);
    }

})();