import React from "react";
import testAr from "../img/testArticl.png"

const Article = () =>{
    
    return(
        <div className="article mt-5">
            <h2>Cyclist safety</h2>
            <div className="mt-3 d-flex justify-content-around">
                <div>
                    <img src={testAr} alt="Article" />
                </div>
                <div className="article-text">
                    <p>A cyclist is a full-fledged participant in traffic and knowledge of traffic rules is an important component of his safety. To feel confident on the roads of the city and beyond, you need to follow the traffic rules for cyclists. According to the rules, you can ride on the roads when you are 14 years old. Road signs for cyclists
Technical condition of the bicycle. Before leaving, check how the brakes and gear shifters work. Every few rides, check the tightness of the stem bolts, seatpost bolts, and brake pad wear. Nothing should knock, creak or fall off. If you don’t know how to do bicycle maintenance yourself, contact a workshop.
Additional security measures. The bicycle must be equipped with reflectors (front white, rear red and side orange), and an audible signal. To drive at night and in poor visibility conditions, you need to install and turn on the front headlight and rear flasher. The driver of the car will definitely see a moving, flashing bright light at dusk or at night. Think about the battery level in advance. Replace dead batteries or charge them. Bring batteries that have become unusable to the Bikeshop store, we are participating in the “Batteries, Give Up!” project.
Don't forget to equip your bike with a loud signal. You can install a bell or a pneumatic horn. A pneumatic horn is placed on the steering wheel, a plastic flask with air is attached to the frame or in a bottle cage. The AirZound horn has a power rating of 115 decibels, so only use the horn on the road. It cannot be used on the sidewalk or in a pedestrian area.
First aid kit for bicycles and cyclists. The repair kit is a set of patches, a spare chamber, hexagons, mountings and a pump that you need on a trip to any distance. Unfortunately, no one is immune from camera punctures, so be always prepared and armed with tools. If you're riding with friends, you might have one pump for everyone. As a rule, pumps are universal and suitable for any type of chamber.</p>
                </div>
            </div>
        </div>
    );
}

export default Article;