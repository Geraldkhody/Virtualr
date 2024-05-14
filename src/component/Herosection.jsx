import  Video1  from "../assets/video1.mp4"
import  Video2  from "../assets/video2.mp4"

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>for developers</span>
        </h1>
        <p className='text-neutral-500 text-lg text-center mt-10 max-w-4xl'>
            Empoweer your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
        </p>
        <div className="flex justify-center items-center space-x-4 mt-10">
            <a href="#" className='py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>
                Start for free
            </a>
            <a href="#" className='py-3 px-4 border rounded-md'>
                Documentation
            </a>
        </div>
        <div className="flex justify-center mt-10">
            <video loop muted autoPlay className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 my-4 mx-2">
                <source src={Video1} type="video/mp4" />
                Your brower doesn't support the video tag.
            </video>
            <video loop muted autoPlay className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 my-4 mx-2">
                <source src={Video2} type="video/mp4" />
                Your brower doesn't support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Herosection
