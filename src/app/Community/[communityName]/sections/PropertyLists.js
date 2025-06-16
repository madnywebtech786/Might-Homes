import React from 'react'
import PropertiesListCard from '@/app/components/PropertiesListCard';

const propertiesListsData = [{
   cardImageSrc: '/images/AboutUsSideImage.png',
   acres: '20,000',
   bedrooms: '3',
   bathrooms: '3',
   cardTitle: 'SWEET HOME FOR SMALL FAMILY',
   cardLocation: 'Boston, USA',
   cardDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.'
},
{
   cardImageSrc: '/images/AboutUsSideImage.png',
   acres: '20,000',
   bedrooms: '3',
   bathrooms: '3',
   cardTitle: 'SWEET HOME FOR SMALL FAMILY',
   cardLocation: 'Boston, USA',
   cardDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.'
},
{
   cardImageSrc: '/images/AboutUsSideImage.png',
   acres: '20,000',
   bedrooms: '3',
   bathrooms: '3',
   cardTitle: 'SWEET HOME FOR SMALL FAMILY',
   cardLocation: 'Boston, USA',
   cardDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.'
},
{
   cardImageSrc: '/images/AboutUsSideImage.png',
   acres: '20,000',
   bedrooms: '3',
   bathrooms: '3',
   cardTitle: 'SWEET HOME FOR SMALL FAMILY',
   cardLocation: 'Boston, USA',
   cardDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.'
},
{
   cardImageSrc: '/images/AboutUsSideImage.png',
   acres: '20,000',
   bedrooms: '3',
   bathrooms: '3',
   cardTitle: 'SWEET HOME FOR SMALL FAMILY',
   cardLocation: 'Boston, USA',
   cardDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.'
},
{
   cardImageSrc: '/images/AboutUsSideImage.png',
   acres: '20,000',
   bedrooms: '3',
   bathrooms: '3',
   cardTitle: 'SWEET HOME FOR SMALL FAMILY',
   cardLocation: 'Boston, USA',
   cardDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor sapiente obcaecati ullam.'
},];

export default function PropertyLists() {
   return (
      <div className='bg-gray-100 p-4 py-10 md:p-8 lg:p-12 2xl:p-20'>
         <div>
            <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-3xl font-bold'>NEW PROPERTIES LIST</h1>
            <p className='text-center text-sm text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla voluptatibus deleniti voluptate voluptatem aperiam quae.</p>
            <p className='text-center text-sm text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, numquam?</p>
         </div>

         <div className='flex justify-center my-10 sm:px-10 lg:px-24'>
            <div className='w-[90%] grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {propertiesListsData.map((cardData, index) => (
                  <PropertiesListCard key={index} cardData={cardData} index={index} />
               ))}
            </div>
         </div>
      </div>
   )
}
