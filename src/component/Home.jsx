import  Products  from "./Products";
import SlidePhoto from "./SlidePhoto"

const Home = () =>{
  return(
    <div  className="py-16">
      <SlidePhoto/>
      <div>
        <Products/>
      </div>
      
    </div>
  )
}
export default Home;