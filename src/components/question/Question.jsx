import React from 'react'
import {Navbar} from '../navbar/Navbar'
import {quest} from '../../../public/assests/quest.png'
function Question() {
  return (
    <div className='Question'>
        <Navbar/>
        <div className="QuestTitle">
            <h1>Ask a public Question</h1>
            <img src={quest}/>
        </div>
    </div>
  )
}

export default Question