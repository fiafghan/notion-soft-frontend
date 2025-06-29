import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const ImagesUrl = [
    "/about-us-whoWeHelp.jpg",
    "/about-us-whatWeDo.png",
    "/about-us-whyChooseUs.jpg",
  ];

  const texts = [
    "Innovate. Build. Elevate.",
    "Code Your Future Today.",
    "Crafting Solutions, Driving Success.",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header />

      <section className="relative w-full py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="space-y-6">
              <CardTitle className="text-4xl md:text-5xl font-bold leading-tight text-center text-gray-800">
                Empowering Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                  Web, Mobile, AI, Desktop
                </span>{' '}
                Applications
              </CardTitle>
              <CardDescription className="text-center max-w-3xl mx-auto text-lg text-gray-600">
                Innovative solutions for web, mobile, and AI applications that grow your business.
              </CardDescription>
            </CardHeader>
            <CardAction className="mt-8">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
              >
                <CarouselContent>
                  {ImagesUrl.map((url, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[60vh] w-full">
                        <img
                          src={url}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                          <h2 className="text-3xl md:text-5xl font-semibold text-white text-center px-6">
                            {texts[index]}
                          </h2>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white text-black shadow-md hover:scale-110 transition duration-300" />
                <CarouselNext className="bg-white text-black shadow-md hover:scale-110 transition duration-300" />
              </Carousel>
            </CardAction>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Software",
            desc: "Data integration for an insurance provider.",
          },
          {
            title: "Testing",
            desc: "Reliable software testing frameworks.",
          },
          {
            title: "BPM",
            desc: "Business process management solutions.",
          },
          {
            title: "Automotive",
            desc: "Automation & breach protection solutions.",
          },
          {
            title: "Retail",
            desc: "Online support for top USA brands.",
          },
          {
            title: "E-commerce",
            desc: "E-commerce portals for manufacturers.",
          },
        ].map(({ title, desc }, i) => (
          <Card key={i} className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-xl shadow hover:shadow-md transition">
            <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
            <CardDescription className="text-gray-600 mb-4">{desc}</CardDescription>
            <Button variant="outline">Learn More</Button>
          </Card>
        ))}
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Executive Notes</h2>
        </div>
        <div className="max-w-5xl mx-auto bg-black text-white rounded-3xl shadow-xl p-10">
          <div className="flex flex-col md:flex-row items-center space-x-6">
            <img src="/naweed.png" alt="CEO" className="w-24 h-24 rounded-full shadow-lg" />
            <div>
              <CardTitle className="text-xl text-orange-300">Sayed Naweed Sayedy, Founder & CEO</CardTitle>
              <CardDescription className="text-gray-300 mt-2">
                "At NotionSoft, our mission goes beyond delivering technology — we create meaningful digital experiences that drive real transformation. We are not just a service provider, but a long-term partner in our clients' growth."
              </CardDescription>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-3 gap-8">
        {[
          ["/jala.jpeg", "Jalal Bakhty", "Co-Founder"],
          ["/imran.png", "Imran Orya", "Frontend Developer"],
          ["/waheed.png", "Waheed Safi", "Backend Developer"],
          ["/fardin.jpg", "Fardin Ibrahimi", "AI Engineer"],
          ["/nesar.jpg", "Nesar Awwab", "Backend Developer"],
        ].map(([img, name, title], i) => (
          <Card key={i} className="flex flex-col items-center text-center bg-gradient-to-br from-gray-100 to-white p-6 rounded-xl shadow">
            <img src={img} alt={name} className="w-24 h-24 rounded-full shadow-lg mb-4" />
            <CardTitle className="text-lg font-semibold text-gray-800">{name}</CardTitle>
            <CardDescription className="text-gray-500">{title}</CardDescription>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
}
