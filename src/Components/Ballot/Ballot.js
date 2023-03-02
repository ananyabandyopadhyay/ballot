import React, { useEffect, useState } from 'react';
import api from "../../Api/Api"
import NomineeCard from "./nomineeCard"
import { AiOutlineClose } from 'react-icons/ai';

const Ballot = () => {
  const [dataset, setDataset] = useState([]);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    const response = api.getBallotData();
    response.then((result)=> setDataset(result.items))
  },[])

  const onSubmitBallot = () => {
    if(Object.keys(selected).length){
      setShowModal(!showModal)
    }
  }

  console.log(dataset);
  console.log(selected.length);

  return (
    <div className='ballot'>
      <div className='innerDiv'>
        <div className='heading'>AWARDS 2021</div>
        {dataset.length && dataset.map((e, key)=>{
          return( 
          <div className='subDiv' id={key}>
            <div className='categoryName'>{e?.title}</div>
            <div className='cardContainer'>
              <NomineeCard nomineeDetails={e?.items} setSelected={setSelected} selected={selected} categoryID = {e.id}  />
            </div>
          </div> )
        })}
        <button className='submitBallotButton' onClick={()=>onSubmitBallot()}>Submit Ballot Button</button>

        {showModal && <div className='modal'>
            <div className='modalContainer'>
            <div className='modalClose' onClick={()=>onSubmitBallot()}><AiOutlineClose /></div>
              Success
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Ballot;