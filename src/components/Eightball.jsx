import React,{useState} from "react";
import "./Eightball.css"
const Eightball = (props) =>{
    const {answers} = props;
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [resetDisplay, setResetDisplay] = useState('none')

    const getAnswer = () => {
        if(color==="black")setResetDisplay('block')
        let idx = Math.floor(Math.random() * answers.length);
        const result = answers[idx]
        setMsg(result['msg']);
        setColor(result['color'])
    }

    const reset = () =>{
        setMsg('Think of a Question');
        setColor('black');
        setResetDisplay('none')
    }
    return(
        <div className="flex-column">
        <button className="Eightball" onClick={()=>{getAnswer()}} style={{backgroundColor:color}}>
            <h1>{msg}</h1>
        </button>
        <button className="Eightball-reset" onClick={()=>reset()} style={{display:resetDisplay}}>Reset</button>
        </div>
    )
}

export default Eightball