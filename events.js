$(document).ready(function () {

    let events = JSON.parse(localStorage.getItem("events")) || [];

    if (events.length === 0) {
        $("#eventList").html("<p>No events saved.</p>");
        return;
    }

    events.forEach(event => {
        $("#eventList").append(`
            <div class="event-card">
                <h3>${event.name}</h3>
                <p><strong>Type:</strong> ${event.type}</p>
                <p><strong>When:</strong> ${event.when}</p>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Guests:</strong> ${event.guest}</p>
            </div>
        `);
    });

});