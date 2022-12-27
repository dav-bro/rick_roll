import './App.css';
import {useEffect, useState} from "react";
import IMG from "./img.png"

const THRESH_SEC = 1;
const App = () => {

    const [cancel, setCancel] = useState(false);
    const [seconds, setSeconds] = useState(0);

     useEffect(() => {
         if (!cancel) {
             setTimeout(() => setSeconds(s => s + 1), 1);
             if (seconds >= THRESH_SEC * 1000) {
                 window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
             }
         }
         else {
             setSeconds(0);
         }

     }, [cancel, seconds])

    console.log("CANCEL", cancel, seconds/1000)
  return (
    <div className={"full middle"} onClick={() => setCancel(c => !c)}>
        <img src={IMG}/>
    </div>
  );
}

export default App;
