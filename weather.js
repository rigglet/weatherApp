
window.addEventListener('load', () => {
    console.log("test")
    let long;
    let lat;

    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
    }, () => {
        document.getElementsByClassName("location-timezone")[0].innerHTML = "Please enable your location";
    })
    
})