import { CheckCircle2 } from "lucide-react";
import CodeImage from "../assets/code.jpg";
// import { checklistItems } from "../constants/index"
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mt-6 tracking-wide text-center">
            Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>coding workflow.</span>
        </h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 p-2">
            <img src={CodeImage} alt="code" />
        </div>
        <div className="w-full lg:w-1/2 pt-12">
            { checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12  ">
                    <div className="flex h-10 w-10 p-2 mx-6 text-green-400 bg-neutral-900 rounded-full justify-center items-center">
                        <CheckCircle2 />
                    </div>
                    <div>
                        <h5 className="mt-1 mb-2 text-lg">
                            {item.title}
                        </h5>
                        <p className="text-sm text-neutral-500">
                            {item.description}
                        </p>
                    </div>
                </div>
            )) }
        </div>
      </div>    
    </div>
  )
}

export default Workflow
