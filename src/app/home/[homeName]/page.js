import Image from "next/image";
import { Home, Bed, Bath } from "lucide-react";
import Gallery from "@/app/sections/Gallery";
import Navbar from "@/app/components/Navbar";

const page = ({params}) => {
    console.log(params.homeName)
    const name=params.homeName
  return (
    <>
      <section className="relative h-screen w-full">
        <Navbar />
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/buildSlide3.png" // Replace with your background image
            alt="Property Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full w-full bg-black/50 flex flex-col justify-center items-start px-6 lg:px-20 text-white">
          {/* Heading and Description */}
          <div className="mb-20 max-w-2xl">
            <h1 className="text-7xl font-bold leading-tight uppercase">
              {name}
            </h1>
            <p className="text-lg mt-4 max-w-md">
              Explore stunning new homes built for comfort, style, and lasting
              value.
            </p>
          </div>

          {/* Property Info Cards */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mx-auto lg:m-0">
            {/* Card 1 */}
            <div className="flex items-center bg-white rounded-xl px-8 p-6 w-full sm:w-auto text-black">
              <Home className="w-12 h-12 text-primary mr-4" />
              <div>
                <p className="text-lg text-gray-500">Area</p>
                <p className="font-semibold text-base">2,400 sq ft</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center bg-white rounded-xl px-8 p-6 w-full sm:w-auto text-black">
              <Bed className="w-12 h-12 text-primary mr-4" />
              <div>
                <p className="text-lg text-gray-500">Bedrooms</p>
                <p className="font-semibold text-base">4 Rooms</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center bg-white rounded-xl px-8 p-6 w-full sm:w-auto text-black">
              <Bath className="w-12 h-12 text-primary mr-4" />
              <div>
                <p className="text-lg text-gray-500">Bathrooms</p>
                <p className="font-semibold text-base">3 Rooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex flex-col lg:flex-row justify-center p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-4/5">
            <Image
              src="/images/aboutSideImg.png"
              width={500}
              height={500}
              alt="About-us Image"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="my-20 lg:mt-12 flex flex-col gap-5">
            <p className="text-2xl font-bold tracking-wider text-primary uppercase">
              {name}
            </p>
            <p className="text-base text-gray-500">
              Sidhu Homes has been helping people from all walks of life
              experience the lifestyle of their dreams for over two decades. We
              always do our best to ensure that your home suits you and your
              family perfectly and that every home we build holds up to our
              Sidhu Seal—the highest quality of construction and materials.
              Sidhu Homes has been helping people from all walks of life
              experience the lifestyle of their dreams for over two decades. We
              always do our best to ensure that your home suits you and your
              family perfectly and that every home we build holds up to our
              Sidhu Seal—the highest quality of construction and materials.
              Sidhu Homes has been helping people from all walks of life
              experience the lifestyle of their dreams for over two decades. We
              always do our best to ensure that your home suits you and your
              family perfectly and that every home we build holds up to our
              Sidhu Seal—the highest quality of construction and materials.
              Sidhu Homes has been helping people from all walks of life
              experience the lifestyle of their dreams for over two decades. We
              always do our best to ensure that your home suits you and your
              family perfectly and that every home we build holds up to our
              Sidhu Seal—the highest quality of construction and materials.
            </p>
            <button className="bg-primary p-4 px-6 text-lg text-white rounded-xl w-max">
              Schedule A Call
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
        <div className="flex flex-col gap-1 mb-4 items-center">
          <h3 className="text-3xl font-bold capitalize">{name} House</h3>
          <p className="text-base text-primary">Floor Plan</p>
        </div>
        <Image
          src={"/images/aspire-floor.PNG"}
          alt="aspire floor plan"
          width={500}
          height={500}
          className="w-full mx-auto"
        />
      </div>
      <Gallery title={`${name} House Gallery`} />
    </>
  );
};

export default page;
