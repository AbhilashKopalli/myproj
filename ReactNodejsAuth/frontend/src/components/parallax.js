import React from 'react';
import './parallax.css'

const Images = () => {
    return (
        <div>
            <body>
            <div class="bgimg-1">
                <div class="caption">
                    <span class="border">SCROLL DOWN</span>
                </div>
            </div>
            <div style={{ color: "#777", backgroundColor: "white", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                <h3 style={{ textAlign: "center" }}>Malware Detection Using Machine Language</h3>
                {/* <p> Hi, this is testing </p> */}
            </div>

            <div class="bgimg-2">
                <div class="caption">
                    <span class="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>LESS HEIGHT</span>
                </div>
            </div>

            <div style={{ position: "relative" }}>
                <div style={{color: "#ddd", backgroundColor: "282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify"}} >
                        {/* <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p> */}
                </div>
        </div>

            <div class="bgimg-3">
                <div class="caption">
                    <span class="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>SCROLL UP</span>
                </div>
            </div>

            <div style={{ position: "relative" }}>
                <div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                    {/* <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p> */}
                </div>
            </div>

            <div class="bgimg-1">
                <div class="caption">
                    <span class="border">COOL!</span>
                </div>
            </div>
            </body>
        </div>
    );
}

export default Images;