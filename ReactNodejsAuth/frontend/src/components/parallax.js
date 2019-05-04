import React from 'react';
import './parallax.css'
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounce: {
        animation: 'x 10s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}

const Images = () => {
    return (
        <div>
            <body>
                <div class="bgimg-1">
                    <div class="caption">
                        <StyleRoot>
                            <div className="test" style={styles.bounce}>
                                <span class="border" style={styles.bounce}>TROJANS</span>
                            </div>  </StyleRoot>
                    </div>
                </div>
                <div style={{ color: "#777", backgroundColor: "white", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                <StyleRoot>
                            <div className="test" style={styles.bounce}>
                            <h3 style={{ textAlign: "center" }}>Malware Detection Using Machine Language</h3>
                            </div>  </StyleRoot>
                    {/* <p> Hi, this is testing </p> */}

                </div>

                <div class="bgimg-2">
                    <div class="caption">
                        <StyleRoot> <div className="test" style={styles.bounce}> >
                    <span class="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>WORMS</span>
                        </div>  </StyleRoot>
                    </div>
                </div>

                <div style={{ position: "relative" }}>
                    <div style={{ color: "#ddd", backgroundColor: "282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }} >
                        {/* <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p> */}
                    </div>
                </div>

                <div class="bgimg-3">
                    <div class="caption">
                    <StyleRoot>
                            <div className="test" style={styles.bounce}>
                    <span class="border" style={{ backgroundColor: "transparent", fontSize: "25px", color: "#f7f7f7" }}>VIRUSES</span>
                    </div>  </StyleRoot>
                    </div>
                </div>

                <div style={{ position: "relative" }}>
                <div style={{ color: "#ddd", backgroundColor: "#282E34", textAlign: "center", padding: "50px 80px", textAlign: "justify" }}>
                            {/* <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p> */}
                        </div>
                    </div>

                        <div class="bgimg-1">
                            <div class="caption">
                            <StyleRoot>
                            <div className="test" style={styles.bounce}>
                                <span class="border">MALWARE BOT</span>
                                </div> </StyleRoot>
                            </div>
                        </div>
            </body>
                </div>
                );
            }
            
export default Images;