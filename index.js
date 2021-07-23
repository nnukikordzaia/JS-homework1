var button = document.getElementById('button');
var cname = document.getElementById('cname');
var temperature = document.getElementById('temperature');
const api={
    key: "5141e7b91048915162033fd01b3f4f0f",
    base: "https://api.openweathermap.org/data/2.5/"
  }
button.addEventListener('click', function(){
    var cityName = document.getElementById("name").value;
    fetch(`${api.base}weather?q=${cityName}&appid=${api.key}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        
        cname.innerHTML = nameValue;
        temperature.innerHTML = tempValue;
    })
    .catch(err => alert('City '+ cityName +' not found.'))
})
