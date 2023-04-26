import React, { useContext } from 'react'
import { myContext } from '../Context/DataProvider';

const Answer = () => {
 const {list} = useContext(myContext)
  

  return (
    <div>
      {
        list.length === 0 ? <h2>List is Empty</h2> : <h2>List</h2>
      }
    </div>
  )
}

export default Answer;