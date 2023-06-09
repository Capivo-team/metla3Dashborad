import React from 'react'

export default function ShowMenu({color}) {
  return (
    <>
      <svg
        style={{ color: color, width: '100%' }}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="svg-icon--material svg-icon brand-aside-toggle-open"
        data-name="Material--LastPage"
      >
        <path d="M0 0h24v24H0V0z" fill="none" opacity="0.87"></path>
        <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"></path>
      </svg>
    </>
  )
}
