(function(){
    const dataBaseURL = `http://localhost:3000/`;

    $.ajax({
        url: dataBaseURL + "textFields/" + "homePageTitle",
        type: 'get',
        success: (textField) => {
            document.title = textField.text;
        }
    });

    $.ajax({
        url: dataBaseURL + "textFields/" + "greetingText",
        type: 'get',
        success: (textField) => {
            $('#greetingText').text(textField.text);
        }
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
        container.classList.add("event");

        const name = document.createElement("h4");
        $(name).text(this.name);
        container.append(name);

        const location = document.createElement("p");
        $(location).text(this.location);
        container.append(location);
        
        const date = document.createElement("p");
        $(date).text(this.date);
        container.append(date);

        const description = document.createElement("p");
        $(description).text(this.description);
        container.append(description);

        const currentEvents = document.getElementById("currentEvents");
        currentEvents.append(container);
    }
})();