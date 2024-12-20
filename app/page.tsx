"use client";
import { TextCarousel } from "./components/TextCarousel";
import { ImageCarousel } from "./components/ImageCarousel";
import Image from "next/image";

export default function Page() {
  const images = [
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693155/wbe33_czxjyc.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693157/web333_lxmprn.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693154/web3_edjekd.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693156/websui_eygupm.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734696064/upsui_yiigfr.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693155/wbe33_czxjyc.png",
  ];

  return (
    <main className="w-full min-h-screen bg-[#53B0FF] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h1 className="text-white font-montserrat font-bold text-3xl md:text-[56px] leading-tight md:leading-[72px] mb-4 text-center">
            Non-playable Suis
          </h1>
          <p className="text-white font-montserrat font-medium text-lg md:text-2xl leading-relaxed md:leading-[38.4px] text-center max-w-[886px] px-4">
            A new era starts with legendary Wojack on Sui called Non-playable
            Suis.
          </p>
        </div>

        {/* Copy Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12 justify-center items-center">
          <div className="bg-white p-3 md:p-4 flex items-center rounded w-full md:w-auto">
            <span className="font-montserrat font-medium text-base md:text-2xl leading-tight md:leading-[38.4px] break-all md:break-normal">
              Bxd90083016f31a1216fx0a1v0::
            </span>
          </div>
          <button
            className="bg-[#4EA1FF] text-white px-4 py-2 rounded flex items-center gap-2 w-full md:w-auto justify-center"
            onClick={() =>
              navigator.clipboard.writeText("Bxd90083016f31a1216fx0a1v0::")
            }
          >
            <span className="sr-only">Copy address</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="font-montserrat font-medium text-lg md:text-2xl leading-tight md:leading-[38.4px]">
              COPY
            </span>
          </button>
        </div>

        <div className="mb-12 md:mb-20 mt-16 md:mt-32 relative">
          <div className="border-4 md:border-8 border-[#327ACC] relative">
            <TextCarousel text="$Non-playable Suis" />
            {/* Image positioned on top border */}
            <div className="hidden md:block absolute -top-[358px] left-[1010px]">
              <Image
                src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734701445/WhatsApp_Image_2024-12-18_at_20.54.04_2_feschi.png"
                width={400}
                height={400}
                alt="Decorative image"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-12">
          {[
            {
              text: "TELEGRAM",
              color: "#4EA1FF",
              image: "/v1734693156/wbe333_oz7sew.png",
              url: "https://t.me/yourTelegramGroup",
            },
            {
              text: "BUY",
              color: "#4EFFE6",
              image: "/v1734696064/upsui_yiigfr.png",
              url: "https://hop.ag/swap",
            },
            {
              text: "TWITTER",
              color: "#A1FF4E",
              image: "/v1734693157/web333_lxmprn.png",
              url: "https://twitter.com/yourTwitterHandle",
            },
          ].map((item) => (
            <div
              key={item.text}
              onClick={() => window.open(item.url, "_blank")}
              className="bg-white p-6 md:p-12 rounded-xl flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform cursor-pointer"
              style={{
                border: `4px solid ${item.color}`,
              }}
            >
              <div
                className="w-32 h-32 md:w-[164px] md:h-[164px] rounded-full mb-6 md:mb-10 overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
                style={{
                  border: `1px solid ${item.color}`,
                }}
              >
                <Image
                  src={`https://res.cloudinary.com/dtfvdjvyr${item.image}`}
                  width={164}
                  height={164}
                  alt={item.text}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-montserrat font-semibold text-xl md:text-2xl leading-tight md:leading-[38.4px] text-[#212121]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-white font-semibold text-lg md:text-2xl leading-relaxed md:leading-[38.4px] text-center max-w-[937px] mx-auto mb-12 px-4">
          $NPS is world-famous and on the road a lot. Take a look at our media
          section and get a feel for his lifestyle. From brokie to
          multi-millionaire thanks to SUI-CHAIN!
        </p>

        {/* Image Carousel */}
        <div className="mb-12">
          <ImageCarousel images={images} />
        </div>

        {/* How to Buy Section */}
        <div className="flex justify-center w-full px-4 mb-12 md:mb-20">
          <div className="flex w-full md:w-[1200px] bg-white rounded-[25px] md:rounded-[50px] p-6 md:p-14 relative justify-center items-center shadow-2xl mx-auto">
            {/* Inner border div */}
            <div className="absolute inset-4 border-2 border-[#53B0FF] rounded-[25px] md:rounded-[50px]" />

            {/* Content container */}
            <div className="flex flex-col md:flex-row w-full justify-between items-center relative z-10 px-4 md:px-8 gap-8">
              <div className="w-full md:w-1/2">
                <div className="flex-row justify-center items-start">
                  <h2 className="text-[#212121] font-montserrat font-bold text-4xl md:text-[66px] leading-tight md:leading-[72px] mb-6 md:mb-10">
                    HOW TO BUY
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-[#53B0FF] font-bold text-xl md:text-2xl leading-tight md:leading-[34px] mb-2 md:mb-3">
                        SET UP YOUR WALLET
                      </h3>
                      <p className="text-[#212121] font-semibold text-lg md:text-xl leading-tight md:leading-[30px]">
                        Download the SUIS wallet and create wallet
                      </p>
                    </div>
                    <h3 className="text-[#53B0FF] font-bold text-xl md:text-2xl leading-tight md:leading-[34px]">
                      GET SOME SUI
                    </h3>
                    <h3 className="text-[#53B0FF] font-bold text-xl md:text-2xl leading-tight md:leading-[34px]">
                      CONVERT SUI TO NPS
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693195/WhatsApp_Image_2024-12-18_at_20.54.03_2_2_fqa8di.png"
                  width={500}
                  height={500}
                  alt="Chil guy"
                  className="object-contain w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Carousel Banner */}
        <div className="mb-16 md:mb-32 relative">
          <div className="border-4 md:border-8 border-[#327ACC] transform -rotate-[12deg]">
            <TextCarousel text="$Non-playable Suis" />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white py-4 md:py-5 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-16 md:mt-32">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693154/web3_edjekd.png"
            alt="Logo"
            className="w-[48px] h-[64px] md:w-[58px] md:h-[74px]"
          />
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-[#53B0FF] font-medium text-sm md:text-base leading-5 text-center md:text-left">
              © 2024, NPS | All Rights Reserved
            </span>
            <div className="flex gap-4">
              {["twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#53B0FF] w-6 h-6"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
