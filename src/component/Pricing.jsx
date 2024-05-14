import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-1 text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center mt-12">
        { pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-6">
                <div className="p-10 mx-2 border border-neutral-900 rounded-lg">
                    <p className="text-4xl mb-8">
                        {option.title}
                        {option.title == "Pro" && <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                    </p>
                    <p className="mb-8">
                        <span className="text-5xl mt-6 mr-2">{option.price} </span>
                        <span className="text-neutral-400 tracking-tight">/Month </span>
                    </p>
                    <ul>
                        {option.features.map((item, index) => (
                            <li key={index} className="mt-6 flex items-center space-x-3">
                                    <CheckCircle2 />
                                <span className="text-sm">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="w-full border border-orange-900 rounded-md mt-20 inline-flex justify-center items-center h-12 p-5 tracking-tight text-xl hover:bg-orange-900 transition duration-200">Subscribe</a>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing;