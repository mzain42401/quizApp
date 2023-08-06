import React from 'react'

const Result = ({ score, Tscore, playagain }) => {
    const result = score / Tscore * 100
    return (
        <>
            <div className="circle">
                {result}%
            </div>
            <div>
                <button className='nextBtn' onClick={() => playagain()}>Play Again</button>
            </div>
        </>
    )
}

export default Result
