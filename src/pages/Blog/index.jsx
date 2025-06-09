import React from 'react'
import Title from "../../components/common/GrandTitle/Title";
import CardBlog from './components/CardBlog';

import DataBlog from './components/DataBlog/index.js';

const Blog = () => {
  return (
      <>
          <section>
              <div className="container mx-auto ">
                  <Title title={"Blog"} subtitle={"Artikel Terbaru dari Blog Kami"}  />
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                      {DataBlog.map((data) => (
                          <CardBlog key={data.id} category={data.category} title={data.title} date={data.date} image={data.image} content={data.content} />
                      ))}
                  </div>
              </div>
          </section>
      </>
  );
}

export default Blog
