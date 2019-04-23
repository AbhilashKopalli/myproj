import React, { Component } from 'react';
import { red } from '@material-ui/core/colors';
// import logo from '../images/mwaredetec.jpg';
import anime from 'animejs/lib/anime.es';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        // anime({
        //     targets: 'div',
        //     strokeDashoffset: [anime.setDashoffset, 0],
        //     easing: 'easeInOutSine',
        //     duration: 1500,
        //     delay: function(el, i) { return i * 250 },
        //     direction: 'alternate',
        //     loop: true
        //   });
    }

    componentDidMount()
    {
        console.log("In did mount");

          //console.log(anime);

    }


    render() {
        return (
            <div style={{backgroundColor:red }}>
             {/* <img src={logo} style= {{width: '100%' , height: '300px'}}></img> */}
             <h1 id="titletemp">Come in, stay a while.</h1>
             {/* {anime} */}
             {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640"><defs><path d="M52.14 129.29L42.86 125L30.71 125.71L21.43 132.14L21.43 150L30 161.43L42.14 162.14L51.43 155.71L55 141.43L52.14 130L60.71 144.29L65 155L71.43 170L79.29 177.14L90 173.57L95.71 162.14" id="c1eKjipBSJ"></path><path d="M90 93.57L97.86 105L100 117.86L100 128.57L100 140L101.43 150L103.57 162.14L105 151.43L105 137.86L104.29 127.86L119.29 127.14L135 135L151.43 151.43L155 161.43L145 167.14L129.29 169.29L117.14 169.29L107.14 167.14L122.86 169.29L137.14 171.43L155 172.14L177.86 170L200.71 165L223.57 152.14L231.43 140L234.29 125.71L232.14 107.86L220.71 89.29L210 72.86L200.71 59.29L193.57 50L187.14 41.43L187.86 63.57L192.14 80L196.43 93.57L199.29 107.86L200.71 120.71L201.43 134.29L202.14 147.14L204.29 160.71L210 169.29L207.86 156.43L207.14 146.43L207.86 128.57L217.14 124.29L230 126.43L242.86 134.29L251.43 140L262.86 150L267.86 160.71L275 175L285 181.43L292.86 175L299.29 158.57L298.57 142.14L294.29 132.14L287.14 122.86L290 135.71L296.43 146.43L301.43 155.71L311.43 172.14L310.71 157.14" id="b2VDvqa099"></path><path d="M274.29 81.43L265.71 91.43L267.14 102.14L277.14 105.71L289.29 101.43L299.29 99.29L293.57 89.29L284.29 83.57L272.14 78.57" id="a1IpbEaJHJ"></path></defs><g><g><g><g><use opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g></g><g><g><use  opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g></g><g><g><use opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g></g></g></g></svg> */}
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640"><defs><path d="M52.14 129.29L42.86 125L30.71 125.71L21.43 132.14L21.43 150L30 161.43L42.14 162.14L51.43 155.71L55 141.43L52.14 130L60.71 144.29L65 155L71.43 170L79.29 177.14L90 173.57L95.71 162.14" id="c1eKjipBSJ"></path><path d="M90 93.57L97.86 105L100 117.86L100 128.57L100 140L101.43 150L103.57 162.14L105 151.43L105 137.86L104.29 127.86L119.29 127.14L135 135L151.43 151.43L155 161.43L145 167.14L129.29 169.29L117.14 169.29L107.14 167.14L122.86 169.29L137.14 171.43L155 172.14L177.86 170L200.71 165L223.57 152.14L231.43 140L234.29 125.71L232.14 107.86L220.71 89.29L210 72.86L200.71 59.29L193.57 50L187.14 41.43L187.86 63.57L192.14 80L196.43 93.57L199.29 107.86L200.71 120.71L201.43 134.29L202.14 147.14L204.29 160.71L210 169.29L207.86 156.43L207.14 146.43L207.86 128.57L217.14 124.29L230 126.43L242.86 134.29L251.43 140L262.86 150L267.86 160.71L275 175L285 181.43L292.86 175L299.29 158.57L298.57 142.14L294.29 132.14L287.14 122.86L290 135.71L296.43 146.43L301.43 155.71L311.43 172.14L310.71 157.14" id="b2VDvqa099"></path><path d="M274.29 81.43L265.71 91.43L267.14 102.14L277.14 105.71L289.29 101.43L299.29 99.29L293.57 89.29L284.29 83.57L272.14 78.57" id="a1IpbEaJHJ"></path></defs><g><g><g><g><use opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g></g><g><g><use  opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g></g><g><g><use opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g></g></g></g></svg>
            Home
            </div>
        );
    }
}