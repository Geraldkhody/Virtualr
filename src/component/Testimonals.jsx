import { testimonials } from "../constants"

const Testimonals = () => {
  return (
    <div className="mt-10 lg:mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        { testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                <div className="bg-neutral p-6 rounded-md border border-neutral-800 font-thin text-sm">
                    <p>{testimonial.text} </p>
                    <div className="flex mt-8 items-start">
                        <img className="w-12 h-12 rounded-full mr-6 border-neutral-300" src={testimonial.image} alt={testimonial.user} />
                        <div>
                            <h6>{testimonial.user}</h6>
                            <span className="text-xs italic font-normal text-neutral-600">{testimonial.company}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonals
