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
})();