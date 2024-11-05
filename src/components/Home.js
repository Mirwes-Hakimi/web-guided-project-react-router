// We'll need React Router's hook to navigate around
import { useNavigate } from "react-router-dom";


export default function Home() {

  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  const navigate = useNavigate();
  const routeToShop = () => {
       navigate('items-list')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://cdn.pixabay.com/photo/2014/07/15/13/36/coffee-shop-393954_1280.jpg'
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        Shop now!
      </button>
    </div>
  )
}
