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

 const getloction = () => {
    if(navigator.geolocation.getCurrentPosition){
        navigator.geolocation.getCurrentPosition((position) =>{
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
        });
    }
 };