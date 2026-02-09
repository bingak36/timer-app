import React ,{useState,useMemo}from 'react'

const SquareCalc = () => {
    const [number, setNumber]=useState(0)
    const [count, setCount]=useState(0)

    const squared =useMemo(()=>{

        console.log('제곱 제산중....',number,count)
        return number*number

    },[number])
  
    return (
    <div>
        <h2>숫자의 제곱 구하기</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input
             type="number" 
             onChange={(e)=>setNumber(e.target.value)}
             placeholder='숫자를 입력하세요'/>
            <p>{number}의 제곱근은? {squared}</p>
            <button
            onClick={()=>setCount(count +1)}
            >카운트 증가:{count}</button>
        </form>
    </div>
  )
}

export default SquareCalc