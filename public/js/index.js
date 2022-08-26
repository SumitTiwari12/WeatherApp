const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const submitBtn = document.getElementById("submitBtn")
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")
const main_layer = document.querySelector(".main_layer")


submitBtn.addEventListener("click",async(e)=>{
    e.preventDefault()
    console.log("click")
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Plz write the name before search`
        temp.innerHTML = ``
            temp_status.innerHTML = ''
    }
    else{
        try {
            let city = cityName.value
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2e58baa10cef0a2ec4a3f0a2c6712e8`
            const response = await fetch(url)
            let data = await response.json()
            console.log(data)
            temp.innerHTML = `${(data.main.temp-273.15).toFixed(2)} <sup>o</sup> C`
            main_layer.setAttribute('class','data_show')
            city_name.innerText = data.name


            let temMode = data.weather[0].main
            console.log(temMode)
            if(temMode=='Clear'){
                temp_status.innerHTML = `<i class="fa-solid fa-sun fa" style='color:#eccc68'></i>`
            }
            else if(temMode=="Rain"){
                temp_status.innerHTML = `<i class="fa-solid fa-rain fa" style='color:#f1f2f6'></i>`
            }
            else if(temMode=="Clouds"){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud fa" style='color:#a4b0be'></i>`
            }
            
            
        } catch{
            city_name.innerText = `Plz enter the city name properly`
            temp.innerHTML = ``
            temp_status.innerHTML = ''
        }

    }
})




const day = document.getElementById("day")
const today_date = document.getElementById("today_date")
const month = document.getElementById("month")

let date = new Date()
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]



let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

day.innerText = days[date.getDay()]
today_date.innerText = date.getDate()
month.innerText = Months[date.getMonth()]
console.log(date.getMonth())
