import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostList = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setPost(res.data.slice(0,10))
            setLoading(false)
            console.log(res.data)
        })
        .catch((e)=>{
            setError('게시글을 불러오지 못했습니다.',e)
            setLoading(false)
        })
    },[])


    if (loading) return <p>로딩중...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {post.map((u) => (
                    <li key={u.id}>
                        {u.title}
                        {u.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList