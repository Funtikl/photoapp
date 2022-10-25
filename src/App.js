import { Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import {Bird} from './components/bird.js'
import {Mountain} from './components/mountain.js'
import {Tree} from './components/tree.js'
import {Home} from './components/home.js'
import {Image} from './components/search'

export default function App() {
const [images, setImages] = useState([])
const [searchWord, setSearchWord] = useState('recent')
useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=30846432-6069af6097e48a454901ae44c&q=${searchWord}&image_type=photo&pretty=true&totalHits=10`)
  .then((res)=>res.json()).then((data)=>{

    setImages(data.hits);
  })
}, [])

const handleKeyDown = (e) =>{
    if(e.key==='Enter'){
      console.log(e.target.value)
      setSearchWord(e.target.value)
    }
   }

  return (
    <div className="container flex flex-col items-center  ">
      <h1 className="relative left-16 top-5 text-5xl font-PTSerif  mx-auto">
      SnapShot
    </h1>
    <input className='relative m-auto top-16 left-16  border w-40  border-black-500' type='search' placeholder='Search'
    onKeyDown={handleKeyDown}/>
    <div className='flex ml-[50px] flex-row relative  top-5  left-1/3 mx-auto items-center m-auto  mt-24  '>
    <a href='/' className='m-4 w-24 text-center border-4 border-black bg-black text-white shadow-black'>Home</a>
    <a href='birds' className='m-4  w-24 text-center border-4 border-black bg-black text-white shadow-black'>Birds</a>
    <a href='mountains' className='m-4  w-24 text-center border-4 border-black bg-black text-white shadow-black'>Mountains</a>
    <a href='trees' className='m-4  w-24 text-center border-4 border-black bg-black text-white shadow-black'>Trees</a>
    </div>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/birds" element={<Bird />}/>
      <Route path="/mountains" element={<Mountain />}/>
      <Route path="/trees" element={<Tree />}/>
    </Routes>
      
      <div className='flex relative h-1/2 w-1/2'>
        {images.map((image, i)=>{
          console.log(image.webformatURL);
          <Image key={i} image={image.webformatURL} alt='aa' className='w-20 h-56' />

        })}
        {/* <img src="https://pixabay.com/get/g0477fd9bf97cd9367c31db6471a7c9f074e949b9eaa631f0211782d8d4de4c890de9c35d96bf13722ec1aa697dce0d876d7ae962127834fa9dfa6958a0c8dbe4_640.jpg"/> */}
      </div>
    </div>
  
  )
}