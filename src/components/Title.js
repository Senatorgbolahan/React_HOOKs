import React from "react"
import './Title.css'

export default function Title({title, subTitle}){
    return (
        <div className="title-block">
            <h1 className="title">{title}</h1>
            <br />
            <h2 className="subtitle">{subTitle}</h2>
        </div>
    )
}