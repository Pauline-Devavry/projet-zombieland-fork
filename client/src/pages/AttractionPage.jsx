import React from 'react'


function AttractionPage() {
   return (
    <div className="bg-backgroundColor">
      
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold  text-white">
          En quête de frissons et de terreur ? Découvrez des attractions toutes aussi <span className="text-red-500">terrifiantes</span> les unes que les autres...
        </h1>
      </div>
      <img src="" alt="image zombie " className="w-full rounded-lg mb-4" />
      <div className="flex justify-center">
        <img src="" alt="" className="" />
      </div>
      <section className="mt-12">
        <h2 className="text-center text-3xl font-bold mb-8  text-white">Nos attractions</h2>
        <div className="flex justify-center mb-6">
          <button className="bg-red-600 text-white py-2 px-4 rounded">
            Categories
          </button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="" alt="Attraction 1" className="w-full rounded-lg mb-4" />
            <p className="text-gray-400">dqsdzqsdzq</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">
              + d'infos
            </button>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="" alt="Attraction 2" className="w-full rounded-lg mb-4" />
            <p className="text-gray-400">dzqssd</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">
              + d'infos
            </button>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="" alt="Attraction 3" className="w-full rounded-lg mb-4" />
            <p className="text-gray-400">gezrsgerdzsgrez</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">
              + d'infos
            </button>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="" alt="Attraction 4" className="w-full rounded-lg mb-4" />
            <p className="text-gray-400">dzqssd</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">
              + d'infos
            </button>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="" alt="Attraction 5" className="w-full rounded-lg mb-4" />
            <p className="text-gray-400">dzqssd</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">
              + d'infos
            </button>
          </div>


          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="" alt="Attraction 6" className="w-full rounded-lg mb-4" />
            <p className="text-gray-400">dzqssd</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded mt-4">
              + d'infos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


export default AttractionPage;