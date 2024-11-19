import React, { useEffect, useState } from 'react';


import Slider from "./Slider";


const MainPage = () =>{



    return(
        <div>

            <main>
                <Slider />
                <div className="desc-main">
                    <p>Buy a bike in Byke. A leisurely bike ride after a working day will help you relax and unwind, strengthen your muscles and give you positive emotions. Bicycles are environmentally friendly and healthy! You need a bicycle to go to work, on bike rides, on bike trips, and to make new friends. Imagine you want to buy a bike in Byke. In the city's bike shops there are hundreds of bicycles, all similar to each other. How to choose one of them? You can read reviews and testimonials on the Internet for a long time, compare the characteristics of bicycles and their photographs. Or you can come to a specialized bike shop. Because we don't just sell bicycles, we will do everything - so that your bicycle:</p>
                    <ol>
                        <li>You liked it and it was comfortable</li>
                        <li>Worth as much as you are willing to spend on it</li>
                        <li>Was high quality and reliable</li>
                    </ol>
                    <p>After purchasing a bike, we do not send you to the service center. If you have any questions regarding warranty or service, please come to our bicycle workshop.</p>
                </div>
            </main>
        </div>
    );
}

export default MainPage;