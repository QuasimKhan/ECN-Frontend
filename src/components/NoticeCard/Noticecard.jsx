import React from 'react'

const Noticecard = (props) => {
  return (



    <div className='w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col'>
    
    <div className='flex flex-col font-serif'>
        <p className='text-red-700 dark:text-red-400'>{props.date}</p>
        <a href={props.link} download={props.link}>{props.title}</a>
    </div>
    </div>
    
  )
}

export default Noticecard