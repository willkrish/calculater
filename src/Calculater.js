import React, { useState } from 'react';
import "./Calculater.css"

const Calculater = () => {
    const [result, setResult] = useState("")
    const handleClick =(e) =>{
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const delet = () => {
        setResult(result.slice(0, -1));
    }
    // eslint-disable-next-line
    const calculate = () => {
        try{
           setResult(eval(result).toString());
        }catch(err) {
            setResult("error");
        }
    }

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>
                <div className="calkeypad">
                 <button className="c" onClick={clear} id="clear" > clear</button>
                 <button className="c" onClick={delet}  id="delet" > c </button> 
                 <button className="c" onClick={handleClick}  name="/" > &divide; </button> <br />
                 <button  onClick={handleClick}  name="7" > 7 </button>
                 <button  onClick={handleClick}  name="8" > 8 </button>
                 <button  onClick={handleClick}  name="9"> 9 </button>
                 <button className="c" onClick={handleClick}  name="*"> &times; </button>
                 <button  onClick={handleClick}  name="4"> 4 </button>
                 <button  onClick={handleClick}  name="5"> 5 </button>
                 <button  onClick={handleClick}  name="6"> 6 </button>
                 <button className="c" onClick={handleClick}  name="-"> &ndash;</button>
                 <button  onClick={handleClick}  name="1"> 1 </button>
                 <button  onClick={handleClick}  name="2"> 2  </button>
                 <button  onClick={handleClick}  name="3"> 3 </button>
                 <button className="c" onClick={handleClick}  name="+"> + </button>
                 <button className="c" onClick={handleClick}  name="%"> % </button>
                 <button  onClick={handleClick}  name="0"> 0 </button>
                 <button  onClick={handleClick}  name="."> . </button>
                 <button className="c" onClick={calculate}  id="result"> = </button>
                </div>  
            </div>
        </>
    );
}
export default Calculater;