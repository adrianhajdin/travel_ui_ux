import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div className={`h-[300px] w-[300px]  ${backgroundImage} bg-cover bg-no-repeat `}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        
        <div className="flex flex-col gap-1">
          <p className="bold-18 text-white whitespace-nowrap">{title}</p>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=" relative flex flex-col lg:-mb-[200px]">
      <h2 className="bold-40 ">Our Services</h2>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Visa Application"
          subtitle=""
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="School Application"
          subtitle=""
          
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          title="Bank Statement"
          subtitle=""
          
        />
        <CampSite 
          backgroundImage="bg-bg-img-4"
          title="Passport"
          subtitle=""
        
        />
        <CampSite 
          backgroundImage="bg-bg-img-5"
          title="Birth Certificate"
          subtitle=""
          
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Canada Accomodation"
          subtitle=""
        
        />
      </div>

      
    </section>
  )
}

export default Camp