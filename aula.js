$(document).ready(function () {

    $("#addEventBtn").click(function () {

        const eventData = {
            name: $("#eventName").val(),
            type: $("#eventType").val(),
            when: $("#eventWhen").val(),
            date: $("#eventDate").val(),
            time: $("#eventTime").val(),
            guest: $("#eventGuest").val()
        };

    
        for (let key in eventData) {
            if (eventData[key] === "") {
                alert("Please fill in all fields");
                return;
            }
        }

       
        let events = JSON.parse(localStorage.getItem("events")) || [];
        events.push(eventData);
        localStorage.setItem("events", JSON.stringify(events));

      
        window.location.href = "events.html";
    });

});