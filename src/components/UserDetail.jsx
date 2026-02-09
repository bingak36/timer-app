import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UserDetail = () => {
    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                setUser(res.data)
                setLoading(false)
            })


    }, [userId])


    return (
        <div>
            <h2>사용자 상세</h2>
            <button onClick={()=>setUserId(1)}>1번 사용자</button>
            <button onClick={()=>setUserId(2)}>2번 사용자</button>
            <button onClick={()=>setUserId(3)}>3번 사용자</button>

            {loading && <p>로딩중</p>}
            {user && (
                <div>
                    <p>이름:{user.name}</p>
                    <p>이메일:{user.email}</p>
                    <p>회사명:{user.company.name}</p>
                </div>
            )}
        </div>
    )
}

export default UserDetail