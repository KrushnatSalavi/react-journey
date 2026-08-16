import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { id } = useParams()
    return (
        <div>
           <div className="text-lg font-medium text-gray-900 text-center">User: {id}</div>
        </div>
    )
}
