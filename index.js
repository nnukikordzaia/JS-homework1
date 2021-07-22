var button = document.getElementById('button');
var cname = document.getElementById('cname');
var temperature = document.getElementById('temperature');
console.log(cname);
button.addEventListener('click', function(){
    var cityName = document.getElementById("name").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+
    '&appid=5141e7b91048915162033fd01b3f4f0f')
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
