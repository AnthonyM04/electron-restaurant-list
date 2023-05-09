import './rest-card.css'

export default function RestCard({rest}: any) {

  return(
    <div className="rest-card">
      <img className="rest-img " src={rest.image} alt={rest.name} />
      <h2 className='restaurantName'>{rest.name}</h2>
    </div>
  )
}
