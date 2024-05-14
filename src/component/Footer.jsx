import { resourcesLinks } from "../constants"

const Footer = () => {
  return (
    <div className='mt-20 border-t py-10 border-neutral-700'>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
            <h3 className="text-md font-semibold mb-4">Resource</h3>
            <ul>
                {}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
