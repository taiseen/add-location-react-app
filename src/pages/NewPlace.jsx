import { PlaceInput } from "../components"

const NewPlace = () => {
  return (
    <div className="mt-12 md:mt-16 p-4">
      <h1 className="text-3xl md:text-4xl mb-6 mt-4">Add New Place</h1>

      <PlaceInput />
      
    </div>
  )
}

export default NewPlace