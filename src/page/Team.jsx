import React from 'react'
import Sidebar from "../components/Sidebar"


const Team = () => {
    return (
<>
 <Sidebar/>
    <div className='Team'>
       <h1>Team</h1>
        <p>we make we move</p>
        <div class="grid grid-cols-3 divide-x divide-gray-400">
        <div class="text-center">1</div>
        <div class="text-center">2</div>
        <div class="text-center">3</div>
        </div>
    </div>
        
 </>
    )
}

export default Team