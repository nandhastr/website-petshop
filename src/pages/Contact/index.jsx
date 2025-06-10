import React, { useState } from 'react'
import Title from '../../components/common/GrandTitle/Title'
import Input from '../../components/common/InputFrom'
import Address from '../../components/common/Address';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSendEmail = (e) => {
        e.preventDefault();

        const body = `Nama: ${form.name}\n
                      Email: ${form.email}\n\n
                      Pesan:\n${form.message} `;
        
        const mailToLink = `mailto:nandhatech60@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`

        window.location.href = mailToLink;

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }
        
  return (
      <>
          <section>
              <div className="container mx-auto">
                  <Title title={"Kontak"} subtitle={"Hubungi Kami Untuk Layanan Terbaik"} />

                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-8 ">
                      <form onSubmit={handleSendEmail} className="flex flex-col gap-4 bg-gray-100 p-8">
                          <Input type={"text"} name={"name"} placeholder={"Nama"} clasName={"w-full border border-green-200 border-opacity-50 p-4 rounded-md"} value={form.name} onChange={handleChange}/>
                          <Input type={"email"} name={"email"} placeholder={"Email"} clasName={"w-full border border-green-200 border-opacity-50 p-4 rounded-md"} value={form.email} onChange={handleChange}/>
                          <Input type={"text"} name={"subject"} placeholder={"Subject"} clasName={"w-full border border-green-200 border-opacity-50 p-4 rounded-md"} value={form.subject} onChange={handleChange}/>
                          <textarea name="message" className="w-full border border-green-200 border-opacity-50 p-4 rounded-md" id="" cols="30" rows="5" placeholder="Message" value={form.message} onChange={handleChange}>
                              {form.message}
                          </textarea>

                          <button type="submit" className="bg-[#7AB730] text-white py-2 px-4 rounded-md hover:bg-[#7AB730]/80 transition-colors duration-300 ease-in-out">
                              Kirim Pesan
                          </button>
                      </form>

                      <address className="bg-gray-100 p-8">
                        <Address/>
                      </address>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Contact
