import Image from "next/image";
import React from "react";
import { PhoneCall, Mail } from "lucide-react";

export default function SalesPersons() {
  return (
    <div>
      <div className="w-full flex justify-center bg-gray-100 p-4 py-10 md:p-8 lg:p-12 2xl:p-20">
        <div className="w-8/10">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-3xl text-center font-semibold">
            Sales Contacts and Visitor Information
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
            <div className="flex justify-center">
              <div className="py-5">
                <div className="mt-5">
                  <Image
                    src="/images/AboutUsSideImage.png"
                    width={130}
                    height={130}
                    alt="Sales person Image"
                    className="w-[110px] h-[110px] rounded-[100%]"
                  />
                </div>
                <div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Amy Tse</h3>
                    <p className="text-sm text-gray-400">Area Sales Manager</p>
                  </div>
                  <div className="flex items-center gap-2 mt-5">
                    <PhoneCall
                      size={35}
                      color="white"
                      className="bg-[#B78B37] px-2 py-1 rounded-full"
                    />
                    <p className="text-sm">587-352-3598</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Mail
                      size={35}
                      color="white"
                      className="bg-[#B78B37] px-2 py-1 rounded-full"
                    />
                    <p className="text-sm">Amy.Tse@cedarglenhomes.com</p>
                  </div>
                  <div className="mt-6">
                    <button className="border-2 border-[#B78B37] px-5 py-2 rounded-2xl hover:bg-[#B78B37] hover:cursor-pointer hover:text-white">
                      Book a Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="py-5">
                <div className="mt-5">
                  <Image
                    src="/images/AboutUsSideImage.png"
                    width={130}
                    height={130}
                    alt="Sales person Image"
                    className="w-[110px] h-[110px] rounded-[100%]"
                  />
                </div>
                <div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Veronica Zhivov</h3>
                    <p className="text-sm text-gray-400">Area Sales Manager</p>
                  </div>
                  <div className="flex items-center gap-2 mt-5">
                    <PhoneCall
                      size={35}
                      color="white"
                      className="bg-[#B78B37] px-2 py-1 rounded-full"
                    />
                    <p className="text-sm">587-352-3598</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Mail
                      size={35}
                      color="white"
                      className="bg-[#B78B37] px-2 py-1 rounded-full"
                    />
                    <p className="text-sm">Amy.Tse@cedarglenhomes.com</p>
                  </div>
                  <div className="mt-6">
                    <button className="border-2 border-[#B78B37] px-5 py-2 rounded-2xl hover:bg-[#B78B37] hover:cursor-pointer hover:text-white">
                      Book a Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="py-5">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25234.10578349721!2d-113.94425249665782!3d51.13902107358096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164ccf3de6941%3A0x2a43cc5ac1ff5f2e!2sSavanna%2C%20Calgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2s!4v1718108885074!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-md"
                  />
                </div>
                <div className="text-xs bg-[#B78B37] text-white p-5">
                  <div>
                    <span className="w-5 h-1 font-bold">____</span>
                  </div>
                  <h2 className="text-xl tracking-wide">SAVANNA LN NE</h2>
                  <span className="text-md border-b-2 border-white">
                    79 & 83 Richardo Ranch Avenue SE
                  </span>
                  <p className="mt-2">Monday-Thursday: 2:00pm to 8:00pm</p>
                  <p className="mt-1">
                    Saturday,Sunday & Holidays: 12:00pm to 5:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
