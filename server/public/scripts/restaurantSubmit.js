const handleSubmit = async (event) => {
    event.preventDefault(); 

    // Extract fields from the form, and
    // send a request to create a new restaurant
    let name = document.getElementById("name").value();
    let add = document.getElementById("add").value();
    let add1 = document.getElementById("add1").value();
    let num = document.getElementById("num").value();

    const res = fetch('/createrestaurant')
}

document.addEventListener('DOMContentLoaded', () => {
 
    // Add event listener to the form for submit events
    const form = document.getElementById("rest_form");
    form.addEventListener('submit', handleSubmit)

});
