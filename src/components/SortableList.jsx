import React, { useState, useMemo } from 'react'

const SortableList = () => {

    const [keyword, setKeyword] = useState('')
    const [names] = useState([
        'David', 'Alice', 'Charlie', 'Bob'
    ])

    const filtered = useMemo(() => {
        console.log('정렬 필터링 중....')
        return names
            .filter((name) => name.toLowerCase().includes(keyword.toLowerCase()))
            .sort()

    }, [keyword, names])

    return (
        <div>
            <h2>useMemo 정렬 리스트</h2>
            <input
                value={keyword}
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='이름을 입력하세요' />
            <ul>
                {filtered.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </div>
    )
}

export default SortableList