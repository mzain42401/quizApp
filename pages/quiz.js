import React, { useState } from 'react'
import mydata from './data/questions.json'
import Result from './components/Result'
import { getSession } from 'next-auth/react'



const Quiz = () => {
    const [num, setNum] = useState(0)
    const [clicked, setClicked] = useState(null)
    const [score, setScore] = useState(0)
    const [result,setResult]=useState(false)

const playagain=()=>{
setNum(0)
setResult(false)
setScore(0)
}

    const netQuestion = () => {

    if(clicked!==null){
        if (clicked === mydata.questions[num].correct_answer) {
            setScore(score + 1)
        }
        setClicked(null)
        
        if (num < mydata.questions.length - 1) {
            setNum(num + 1)

        }if (num ==9) {
            setResult(true)
        }
    }
    else{
        alert("Select the option")
    }

        


    }

    const userAnswer = (elem) => {

        setClicked(elem)

    }

    return (
        <>
            <div className="mainContainer">
                {
                    result? <Result playagain={playagain} score={score} Tscore={10}/> :<> <div className="question"><span>{num+1}. </span> {mydata.questions[num].question}</div>
                    <ul>
                        {
                            mydata.questions[num].options.map((elem,ind) => {
                                return <li key={ind} className={clicked===elem? 'checked':null} onClick={() => userAnswer(elem)}>{elem}</li>
                            })
                        }
                    </ul>
                    <div className='btnDiv'>
                        <div className='outOff'>{num + 1} out of 10</div>
                        <button className='nextBtn' onClick={netQuestion}> Next </button>
    
                    </div>
                    </>
                }
                
            </div>

        </>
    )
}

export default Quiz


export async function getServerSideProps({req}){
   const session=await getSession({req})
   if(!session){
return{
    redirect: {
        destination:"/auth/signin",
    permanent:false
  }
}
   }
   return{
    props: {
      session
  }
}

}