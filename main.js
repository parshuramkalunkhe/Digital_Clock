let ObjDatetime, date, time;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    ObjDatetime = new Date(); 
    date = ObjDatetime.toLocaleDateString(undefined, options);
    time = ObjDatetime.getHours() + ':' + ObjDatetime.getMinutes() + ':' + ObjDatetime.getSeconds();
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}, 1000);


document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}