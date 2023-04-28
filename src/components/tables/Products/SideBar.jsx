import { useState, useRef } from 'react'

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarRef = useRef(null)

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar)
  }

  const handleOverlayClick = (event) => {
    if (event.target === sidebarRef.current) {
      setShowSidebar(false)
    }
  }

  return (
    <div ref={sidebarRef} className="sidebar-container">
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        Toggle Sidebareeeee
      </button>
      <div
        className={`sidebar ${showSidebar ? 'show' : ''}`}
        ref={sidebarRef}
        onClick={handleOverlayClick}
      >

        hkhkhk
        {/* sidebar content goes here */}
      </div>
    </div>
  )
}
