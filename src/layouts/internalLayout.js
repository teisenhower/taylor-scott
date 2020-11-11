import React from 'react'
import style from './internalLayout.module.css'

export default ({ children, id }) => (
  <section id={id} className={style.main}>
    {children}
  </section>
)
