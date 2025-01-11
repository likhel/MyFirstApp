import React from 'react'
import { Link } from 'react-router-dom'

const PetCard = (props) => {
  const { name, pet_image,id} = props.item;
  return (

    <div className="col">
        <Link to={`/petdetail/${id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <img src={pet_image} alt={""} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h5 className="text-lg font-semibold">{name}</h5>
                <h5 className="text-lg font-semibold">{breed}</h5> 
                <h3 className="text-xl font-bold text-gray-800 mt-2">${age}</h3>
              
                    
                
                
                </div>
            </div>
        </Link>
    </div>
    
  )
}

export default PetCard

