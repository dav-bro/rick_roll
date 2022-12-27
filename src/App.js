import './App.css';
import {useEffect} from "react";
import IMG from "./img.png"


const App = () => {



     useEffect(() => {
          setTimeout(() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 10000)
     }, [])

  return (
    <div className={"full middle"}>
        <img src={IMG}/>
    </div>
  );
}

export default App;
