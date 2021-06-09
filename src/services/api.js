import axios from 'axios';

const API_KEY ='efe88fc66967553a9ec1887e0c2ba2d3';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}