import React from 'react'
import "./SkillsBar.scss"

function SkillsBar() {


  return (

    <div className='Container'>
        <div className='cont'>
        <div className='skillBox'>
            <span className='tittle'>HTML</span>
            <div className='skillBar'>
                <span className='skillP HTML'>
                    <span className='tooltip'>95%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>CSS</span>
            <div className='skillBar'>
                <span className='skillP CSS'>
                    <span className='tooltip'>90%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>JavaScript</span>
            <div className='skillBar'>
                <span className='skillP JS'>
                    <span className='tooltip'>80%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>React</span>
            <div className='skillBar'>
                <span className='skillP React'>
                    <span className='tooltip'>80%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>Boostrap</span>
            <div className='skillBar'>
                <span className='skillP BS'>
                    <span className='tooltip'>70%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>Git</span>
            <div className='skillBar'>
                <span className='skillP Git'>
                    <span className='tooltip'>70%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>Photoshop</span>
            <div className='skillBar'>
                <span className='skillP PS'>
                    <span className='tooltip'>75%</span>
                </span>
            </div>
        </div>
        <div className='skillBox'>
            <span className='tittle'>CorelDraw</span>
            <div className='skillBar'>
                <span className='skillP CD'>
                    <span className='tooltip'>80%</span>
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SkillsBar