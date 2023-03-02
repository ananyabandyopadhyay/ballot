import React from 'react';
import  "./style.css"

const NomineeCard = ({nomineeDetails, setSelected, selected, categoryID}) => {

  const onSelectNomineeButton = (id, value) => {
    setSelected({
      ...selected,
      [id]: value
    })
  }

  console.log();

  return (
    <div className='nomineeCardContainer'>
      {nomineeDetails.length && nomineeDetails.map((e, key)=>{
        const keys = Object.values(selected);
        return( 
        <div className={keys.includes(e?.id) ? 'highlightedNomineeCardDiv' : 'nomineeCardDiv'} id={key}>
          <div className='nomineeName'>{e.title}</div>
          <div className='nomineeImage'> 
            <img src={e.photoUrL} className='nomineeImage' alt=''/>
          </div>
          <button className='selectButton' onClick={()=>onSelectNomineeButton(categoryID, e?.id)}>Select This</button>
        </div> )
      })}
    </div>
  )
}

export default NomineeCard;