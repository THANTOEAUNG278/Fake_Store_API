import { Products } from "./Products";
import SlidePhoto from "./SlidePhoto"

const Home = () =>{
  return(
    <div  className="py-16">
      <SlidePhoto/>
      <Products/>
    </div>
  )
}
export default Home;