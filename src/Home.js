import React, { useState } from 'react'; 
import './style.css';
import axios from 'axios';

function Home() {
    const [data, setData] = useState({
        celcius: 10,
        name: 'london',
        humidity: 10,
        speed: 2
    });
    const [name, setname] = useState('');

    const handleclick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b79ef503b3ea4cfa80464544c35bf0f5&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    console.log(res.data);
                    setData({
                        ...data,
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed
                    });
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text' placeholder='Enter City Name' onChange={e => setname(e.target.value)} />
                    <button><img src='/Images/1.png' onClick={handleclick} alt=''></img></button>
                </div>
                <div className='winfo'>
                    <img src='/Images/cloud.jpg' alt='' />
                    <h1>{data.celcius}°C</h1>
                    <h2>{data.name}</h2>
                    <div className='details'>
                        <div className='col'>
                            <img src='/Images/5.jpg' alt='' />
                            <div className='humidity'>
                                <p>{data.humidity}%</p>
                                <p>humidity</p>
                            </div>
                        </div>
                    </div>
                    <div className='details'>
                        <div className='col'>
                            <img src='/Images/6.png' alt='' />
                            <div className='wind'>
                                <p>{data.speed}km/h</p>
                                <p>wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
