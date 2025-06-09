import React from 'react'
import Title from '../../components/common/GrandTitle/Title'
import CardPrice from './components/CardPrice';
import PriceList from './components/PriceList/index.js';

const Pricing = () => {
  return (
      <>
          <section>
              <div className="container mx-auto">
                  <div className="w-[100%] md:w-[80%] ">
                      <Title title={"Harga Layanan Terbaik"} subtitle={"Harga Kompetitif untuk Layanan Hewan Peliharaan"}  />
                  </div>
                  <div className="grid grid-cols-1  md:grid-cols-3 space-x-4">
                      {PriceList.map((items) => (
                          <CardPrice key={items.id} name={items.name} choiceTitle={items.choiceTitle} price={items.price} benefit={items.benefit} className={items.id === 2 ? "bg-[#7AB730]" : "bg-gray-400"} />
                      ))}
                  </div>
              </div>
          </section>
      </>
  );
}

export default Pricing
