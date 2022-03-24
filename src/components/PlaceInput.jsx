import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlaceContext } from "../context";
import { v4 as uuidv4 } from 'uuid';
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';

const PlaceInput = () => {

  const navigate = useNavigate();
  const { addLocation } = useContext(PlaceContext);

  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  const goTo = () => {
    navigate('/', {
      replace: true,
    });
  }

  const clearAll = () => {
    titleRef.current.value = '';
    imageRef.current.value = '';
    addressRef.current.value = '';
    descRef.current.value = '';
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value: title } = titleRef.current;
    const { value: imgUrl } = imageRef.current;
    const { value: address } = addressRef.current;
    const { value: description } = descRef.current;

    const place = {
      // use if for local JSON DB... FireBase auto generates id
      id: uuidv4(),
      title,
      imgUrl,
      address,
      description
    };

    addLocation(place);
    clearAll();
    goTo();
  }

  return (
    <form onSubmit={handleSubmit}
      className="space-y-3 bg-white w-full md:w-1/2 mx-auto p-4 rounded shadow-md">

      <div className="space-y-2">
        <label htmlFor="title" className="font-bold text-lg">Place Title</label>
        <input id="title" type="text" placeholder="Name of the place"
          className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300"
          ref={titleRef} required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="img" className="font-bold text-lg">Image URL</label>
        <input id="img" type="url" placeholder="http://www.demo.com/image.jpg"
          className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300"
          ref={imageRef} required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="add" className="font-bold text-lg">Address</label>
        <input id="add" type="text" placeholder="#Block-1, #Rode-2, Street"
          className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300"
          ref={addressRef} required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="dec" className="font-bold text-lg">Description</label>
        <textarea id="dec" placeholder="Some info about that place..."
          className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300 resize-none h-40"
          ref={descRef} required
        />
      </div>

      <div className="">
        <Tippy content="Just clear all fields value...">
          <button className="px-4 py-2 bg-gray-300 rounded shadow duration-300 
        hover:bg-red-500 hover:text-white" onClick={clearAll}> Clear All </button>
        </Tippy>
        
        <button className="px-4 py-2 bg-gray-300 rounded shadow duration-300 float-right
        hover:bg-green-500 hover:text-white" > Add Place </button>
      </div>
    </form>
  )
}

export default PlaceInput