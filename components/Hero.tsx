import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
  

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      
        <h1 className="bold-52 lg:bold-88">Journey and Discover with Us</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
      Embark on  unforgettable journeys with us where every destination is a story waiting to be written.Your next adventure begins here.
        </p>

       

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-7">
          <Button 
            type="button" 
            title="Book Appointment" 
            variant="btn_blue" 
          />
         
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-full flex-col gap-8 rounded-3xl ring-2 ring-blue-600 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-blue-600 p-3 mx-auto font-semibold">Explore</p>
              
            </div>
            <img src='https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=600'className='h-[400px] sm:h-[500px] rounded-2xl'/>
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default Hero