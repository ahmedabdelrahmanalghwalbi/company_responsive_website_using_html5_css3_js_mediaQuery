//Initialize and add the map
function initMap(){
    //your location
    const loc = { lat:31.257111, lng:32.295341 };
    //centerd map location
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom:14,
        center:loc
    });
    //the marker, positioned at location
    const marker = new google.maps.Marker({position:loc , map:map});
}