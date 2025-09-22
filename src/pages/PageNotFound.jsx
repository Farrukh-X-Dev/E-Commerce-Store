import React from 'react'

const PageNotFound = () => {
  let documentTitle = "Not Found";
  document.title = documentTitle;
  return (
    <div className='text-2xl mx-auto '>Page Not Found</div>
  )
}

export default PageNotFound