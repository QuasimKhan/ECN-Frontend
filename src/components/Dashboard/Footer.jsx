import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-24 flex items-center justify-center">
      <p className="text-sm text-gray-600">
        Copyright  {new Date().getFullYear()} React Vite
      </p>
    </footer>
  )
}


export default Footer