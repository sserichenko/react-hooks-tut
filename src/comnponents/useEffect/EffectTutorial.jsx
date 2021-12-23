import axios from 'axios';
import React, {useState, useEffect} from 'react';

const EffectTutorial = () => {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[count].email);
                // console.log("API WAS CALLED!");
            })
            .catch((error) => {console.log(error)})
    }, [count])

    return (
        <div>
      USE EFFECT HOOK
      <h1>Email :{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
    );
};

export default EffectTutorial;