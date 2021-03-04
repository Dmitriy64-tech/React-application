import React from 'react'
import preloader from 'D:\\Git Rep\\React-application\\src\\img\\preloader.svg'
import s from './Preloader.module.css'

export default function Preloader() {
    return (
        <div className={s.preloaderIMG}><img src={preloader}></img> </div>
    )
}
