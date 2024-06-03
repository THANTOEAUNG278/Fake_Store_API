import { useEffect, useState } from "react"
const images =[
  "https://i.pinimg.com/564x/e3/32/f1/e332f12a8db90442e3d2df8a9e14ee60.jpg",
  "https://i.pinimg.com/564x/b7/09/43/b709432bff83d340694eb716b8012f63.jpg",
  "https://i.pinimg.com/564x/17/ef/6e/17ef6eafb11e8ff84cc4a5acce6b81d9.jpg",
]

const SlideShow = ({images}) => {
  const [currentImgIndex,setCurrentImgIndex] =useState(0);

  const nextSlide =() => {
    setCurrentImgIndex(prev =>prev === images.length -1 ? 0 : prev + 1)
  }
  useEffect (()=>{
    const intervalId = setInterval(()=>{
      nextSlide();
    },3000);
    return ()=>{
      clearInterval(intervalId);
    }
  },[currentImgIndex]);

  return(
    <div>
      <div className="absolute left-5">
        p--50% off!!!!
      </div>
      <img className="w-full product-Ratio" src={images[currentImgIndex]} />
    </div>
  )
}

const PhotoSlide = () =>{
  return(
    <div>
      <SlideShow images={images}/>
    </div>
  )
}
export default PhotoSlide;
