import React, { useEffect, useState } from "react";
import './ClockFunctional.css';



const ClockFunctional = (props) => {

    const [date, setDate] = useState(new Date());


    const tick = () => {

        setDate(new Date())
    }



    useEffect(() => {


        let timerID = setInterval(
            () => {tick()},
            1000
        );


        return (() => {
            clearInterval(timerID);
        })
    }, [date])








    return (
        <div className="clock">
        //     <h4>Time: {date.toLocaleTimeString()}  <span onClick={props.toggleClockMethod()}>X</span></h4>

        </div>
    )

}


export default ClockFunctional;

















// LICZNIK + HOOKI PROBA 3-4


// const ClockFunctional = (props) => {

//     console.log(`Initialization`);
//     const [date, setDate] = useState(new Date());


//     const tick = () => {

//         setDate(new Date());
//     }



//     useEffect(() => {


//         let timerID = setInterval(
//             () => {tick()},
//             1000
//         );



//         return(() => {
//             clearInterval(timerID)
//         })
//     }, [date])









//     return (

//         <div className="clock">
//             <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
//         </div>
//     )



//     }


//     export default ClockFunctional;
















































// LICZNIK + HOOKI PROBA 2



// import React, { useEffect, useState } from "react";
// import './ClockFunctional.css';



// const ClockFunctional = (props) => {

// console.log(`Initialization`);
// const [date, setDate] = useState(new Date());


// const tick = () => {

//     setDate(new Date());
// }



// useEffect(() => {


//     let timerID = setInterval(
//         () => {tick()},
//         1000
//     );



//     return(() => {
//         clearInterval(timerID)
//     })
// }, [date])









// return (

//     <div className="clock">
//         <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
//     </div>
// )



// }


// export default ClockFunctional;






































// Próba nr  1 #hooki



// import React, { useState, useEffect } from "react";
// import './ClockFunctional.css';




// const ClockFunctional = (props) => {

//     console.log(`Initialization lifeCycle: setting state [date, setDate]`);

// const [date, setDate] = useState(new Date());



// const tick = () => {
//     setDate(new Date())
// };


// useEffect(() => {
//     let timerID = setInterval(
//         () => {tick()},
//         1000
//     );


//     console.log(`Mounting && Updation lifeCycle: componentDidMount() && componentDidUpdate()`);


//     return(() => {
//         clearInterval(timerID)
//         console.log(`Unmounting lifeCycle: componentWillUnmount()`);
//     })
// }, [data]);

//     return (

//         <div className="clock">
//             <h4>Time: {date.toLocaleTimeString()}<span onClick={props.toggleClockMethod}>X</span></h4>
//         </div>
//     );
// }



// export default ClockFunctional;