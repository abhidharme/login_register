import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages } from '../../Redux/Images/action';
import "./DisplayImages.css"

export const DisplayImages = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
       dispatch(fetchImages())
    }, []);

    const {Images} = useSelector((state)=>state.images)
    console.log(Images)
  return (
    <>
    <div className="mainBox" >

  
        <div className='box2'>
          {
            
           Images.map((ele) => (
              <div key={ele.id} >
                <img src={ele.image} alt="image" style={{height:"100%" , width:"100%"}} />
              </div>
            ))
          }

        </div>
      </div>
      <br />
    </>
  )
}
