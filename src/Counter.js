import React, { Component } from 'react';
import ButtonsPanel from './ButtonsPanel';
// import React from 'react';
import './Counter.css';
import Display from './Display';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';








// KOMPONENT KLASOWY LICZNIK + HOOKI PROBA 5

class Counter extends Component {

    constructor(props) {

        super(props)

        this.state = {
            counterValue: this.props.initValue,
            showClock: true
        };
    }



    toggleClock = () => {

        this.setState((prevState) => {

            return ({
                showClock: !prevState.showClock
            })
        })
    }








    changeValue = (action) => {
        // console.log(`changeValue click`);
        // console.log(action);



        this.setState((prevState, prevProps) => {


            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {

                currentCounterValue += 1

            } else if (action === 'reinit') {

                currentCounterValue = prevProps.initValue

            } else {
                currentCounterValue = 0
            }




            return ({
                counterValue: currentCounterValue
            })

        });

    }






    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />
        } else {
            clockElement = <span class="show-clock" onClick={this.toggleClock}>Show clock </span>
        }





        return (

            // <h1>Counter Component</h1>
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                {clockElement}
            </div>
        )
    }

}

























// // KOMPONENT KLASOWY LICZNIK + HOOKI PROBA 2-3-4

// class Counter extends Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             counterValue: this.props.initValue,
//             showClock: true
//         };
//     }



//     toggleClock = () => {


//         this.setState((prevState) => {


//             return({
//                 showClock: !prevState.showClock
//             })

//         })
//     }








//     changeValue = (action) => {
//         // console.log(`changeValue click`);
//         // console.log(action);



//         this.setState((prevState, prevProps) => {


//             let currentCounterValue = prevState.counterValue;

//             if (action === 'add') {

//                 currentCounterValue += 1

//             } else if (action === 'reinit') {

//                 currentCounterValue = prevProps.initValue

//             } else {
//                 currentCounterValue = 0
//             }




//             return ({
//                 counterValue: currentCounterValue
//             })

//         });

//     }






//     render() {


//         let clockElement = '';

//         if (this.state.showClock) {

//             clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />

//         } else {

//             clockElement = <span className="show-clock" onClick={this.toggleClock} >Show clock</span>

//         }




//         return (

//             // <h1>Counter Component</h1>
//             <div className="counter">
//                 Counter:
//                 <Display displayValue={this.state.counterValue} />
//                 <ButtonsPanel buttonMethod={this.changeValue} />

//                 {clockElement}

//             </div>
//         )
//     }

// }











































// // KOMPONENT KLASOWY Z KOMUNIKACJĄ DZIECKO RODZIC + HOOKI

// class Counter extends Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             counterValue: this.props.initValue,
//             showClock: true
//         };
//     }


//     toggleClock = () => {


//         this.setState((prevState) => {


//             return({
//                 showClock: !prevState.showClock    
//             });
//         })
//     }









//     changeValue = (action) => {
//         // console.log(`changeValue click`);
//         // console.log(action);



//         this.setState((prevState, prevProps) => {


//             let currentCounterValue = prevState.counterValue;

//             if (action === 'add') {

//                 currentCounterValue += 1

//             } else if (action === 'reinit') {

//                 currentCounterValue = prevProps.initValue

//             } else {
//                 currentCounterValue = 0
//             }




//             return ({
//                 counterValue: currentCounterValue
//             })

//         });

//     }



//     render() {


//         let clockElement = '';
//         if (this.state.showClock) {
//             // clockElement = <Clock />


//             clockElement = <ClockFunctional  
//             toggleClockMethod={this.toggleClock} />
//         } else {
//             clockElement = <span className="show-clock" onClick={this.toggleClock}>show Clock</span>
//         }

//         return (

//             // <h1>Counter Component</h1>
//             <div className="counter">
//                 Counter:
//                 <Display displayValue={this.state.counterValue} />
//                 <ButtonsPanel buttonMethod={this.changeValue} />
//                 {clockElement}
//             </div>
//         )
//     }

// }
























// // KOMPONENT KLASOWY Z KOMUNIKACJĄ DZIECKO RODZIC + komponent CLOCK #cykl #zycia

// class Counter extends Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             counterValue: this.props.initValue,

//         };
//     }









//     changeValue = (action) => {
//         // console.log(`changeValue click`);
//         // console.log(action);



//         this.setState((prevState, prevProps) => {


//             let currentCounterValue = prevState.counterValue;

//             if (action === 'add') {

//                 currentCounterValue += 1

//             } else if (action === 'reinit') {

//                 currentCounterValue = prevProps.initValue

//             } else {
//                 currentCounterValue = 0
//             }




//             return ({
//                 counterValue: currentCounterValue
//             })

//         });

//     }



//     render() {




//         return (

//             // <h1>Counter Component</h1>
//             <div className="counter">
//                 Counter:
//                 <Display displayValue={this.state.counterValue} />
//                 <ButtonsPanel buttonMethod={this.changeValue} />
//                 <Clock />
//             </div>
//         )
//     }

// }














































// KOMPONENT KLASOWY Z METODĄ this.state i this.setState I KOMUNIKACJĄ DZIECKO--> RODZIC (Display.js)


// class Counter extends Component {

//     constructor(props) {

//         super(props)

//         this.state = {
//             counterValue: this.props.initValue
//         };
//     }


//     changeValue = () => {
//         // console.log(`changeValue click`);

//         this.setState((prevState) => {
//             return ({
//                 counterValue: prevState.counterValue + 1
//             });
//         });

//     }



//     render() {

//         return (

//             // <h1>Counter Component</h1>
//             <div className="counter">
//                 Counter:
//                <Display displayValue={this.state.counterValue}/>
//                 <button onClick={this.changeValue}>
//                     Add 1
//                 </button>

//             </div>
//         )
//     }
// }


















// class Counter extends Component {

//     render() {

//         return (

//             // <h1>Counter Component</h1>
//             <div className="counter">
//                 Counter:
//                 <span className="value">
//                     {Math.floor(Math.random() * (108 - 1 + 1) + 1)}
//                 </span>

//             </div>
//         )
//     }
// }




// Komponent funkcyjny

// function Counter(props) {
//     return (

//         // <h1>Counter Component</h1>
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {Math.floor(Math.random() * (108 - 1 + 1) + 1)}

//             </span>

//         </div>
//     )
// }

export default Counter;