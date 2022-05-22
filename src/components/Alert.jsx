import React from 'react'

export default function Alert({color, type, message}) {
    return (
        <div className={`p-4 mb-4 text-sm text-${color || 'green'}-700 bg-${color || 'green'}-100 rounded-lg dark:bg-${color || 'green'}-200 dark:text-${color || 'green'}-800`} role="alert">
            <span className="font-medium">{type}!</span> {message}
        </div>
    )
}
