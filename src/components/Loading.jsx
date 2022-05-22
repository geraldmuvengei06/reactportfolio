import React from 'react'

export default function Loading() {
    return (
        <div className='flex flex-auto flex-row flex-wrap align-baseline items-center'>
            <div className="loading w-6 h-6 mr-3 border-4 border-indigo-400 rounded-full relative animate-spin"></div>
            Loading..
        </div>
    )
}
