     let popup = document.getElementById("myForm");
      let openbtn = document.getElementById("openbtn");
      let grid = document.getElementById("grid");
      function openForm(){
     popup.classList.add("open-nav");
     openbtn.classList.add("open-ative");
     grid.classList.remove("grid-close");
 }
 function closeForm(){
     popup.classList.remove("open-nav");
     openbtn.classList.remove("open-ative");
     grid.classList.add("grid-close");
 }

 const getLoction = () => {
    if(navigator.geolocation.getCurrentPosition){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else
    {
        alert("This dvice dose not suport the future.")
    }
 };

 const showPosition = (position) =>{
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    const des = document.querySelector("p");
     des.innerHTML = `Latitude : ${lat} <br> Longitude : ${long}`;
    console.log(lat,long);
}

const showError = (error) => {
    switch(error.code){
        case error.PERRMISSOIN_DENIED:
            alert("PERRMISSOIN DENIED");
            break;

        case error.POSITION_UNAVAILABLE:
            alert("POSITION UNAVAILABLE");
            break;
            
            case error.TIMEOUT:
            alert("TIMEOUT");
            break;

            case error.UNKNOWN_ERROR:
            alert("UNKNOWN ERROR");
            break;
    }
}