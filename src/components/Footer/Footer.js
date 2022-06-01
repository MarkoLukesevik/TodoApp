import React from 'react'
import './Footer.css'

export default function Footer({isLight, todos, onFooterItemDelete, onFooterItemFilter}) {
    const footerClass = isLight ? 'footer footer-light' : 'footer footer-dark'
    const footerSmallClass = isLight ? 'footer-small footer-small-light' : 'footer-small footer-small-dark'


  return (
    <>
      <footer className={footerClass}>
          <p className='footer-btn'>{todos.length} items left</p>
          <ul className='footer-list footer-list-big'>
            <li onClick={ () => onFooterItemFilter('all')} className='footer-btn'>All</li>
            <li onClick={ () => onFooterItemFilter('active')} className='footer-btn'>Active</li>
            <li onClick={ () => onFooterItemFilter('completed')} className='footer-btn'>Completed</li>
          </ul>
          <p className='footer-btn' onClick={ () => onFooterItemDelete()}>clear Completed</p>
      </footer>

      <div className={footerSmallClass}>
        <ul className='footer-list footer-list-small'>
            <li onClick={ () => onFooterItemFilter('all')} className='footer-btn'>All</li>
            <li onClick={ () => onFooterItemFilter('active')} className='footer-btn'>Active</li>
            <li onClick={ () => onFooterItemFilter('completed')} className='footer-btn'>Completed</li>
          </ul>
      </div>
    </>
  )
}
