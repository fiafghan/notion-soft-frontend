import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div>
      <Header />
    <div className = "rounded-0 mt-1 rounded-sm shadow-none border-t-1 border-t-orange-200">
      <Card className="h-150 rounded-sm">
          <CardHeader>
            <CardTitle className="text-5xl pt-20 pl-20 pr-200">Empowering Your Business with Web, Mobile, AI, and Desktop Applications.</CardTitle>
            <CardDescription className="pl-20">Innovative solutions for web, mobile, and AI applications that grow your business.</CardDescription>
            <CardAction><Button className="w-40">Read More</Button>
           <div className="mt-5">
             <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
           </div>
            </CardAction>
          </CardHeader>
    </Card>
    </div>
    <div className="grid grid-cols-3">
    <Card className="m-5 p-5 bg-gradient-to-r from-gray-300 to-orange-100">
      <CardTitle>Software</CardTitle>
      <CardDescription>Developed an efficient data integration and interaction solution for an insurance service provider.</CardDescription>
      <Button>Learn More</Button>
    </Card>
    <Card className="m-5 p-5 bg-gradient-to-r from-gray-300 to-orange-100">
      <CardTitle>Software Testing</CardTitle>
      <CardDescription>Implemented a comprehensive testing framework to ensure the reliability and performance of software applications.</CardDescription>
      <Button>Learn More</Button>
    </Card>
    <Card className="m-5 p-5 bg-gradient-to-r from-gray-300 to-orange-100">
      <CardTitle>BPM</CardTitle>
      <CardDescription>Designed and implemented business process management solutions to streamline operations and improve efficiency.</CardDescription>
      <Button>Learn More</Button>
    </Card>
    <Card className="m-5 p-5 bg-gradient-to-r from-gray-300 to-orange-100">
      <CardTitle>Automotive</CardTitle>
      <CardDescription>Helped a leading industrial automation company combat data breach uncertainty.</CardDescription>
      <Button>Learn More</Button>
    </Card>
    <Card className="m-5 p-5 bg-gradient-to-r from-gray-300 to-orange-100">
      <CardTitle>Retail</CardTitle>
      <CardDescription>Provided online support for a leading consumer brand in the USA.</CardDescription>
      <Button>Learn More</Button>
    </Card>
    <Card className="m-5 p-5 bg-gradient-to-r from-gray-300 to-orange-100">
      <CardTitle>E-commerce</CardTitle>
      <CardDescription>Developed e-commerce portals for the manufacturing industry.</CardDescription>
      <Button>Learn More</Button>
    </Card>
    </div>
    <div className="flex justify-center items-center mt-5 text-3xl bg-gradient-to-r from-gray-300 via-orange-200 to-orange-100 border-t-2 border-orange-300">
      Executive Notes
    </div>
    <div className="grid grid-cols-3 gap-1 bg-orange-100">
      <Card className="flex items-center m-5 px-35 py-10 bg-black col-span-3 h-100 mx-80 rounded-br-full rounded-tl-full shadow-xl shadow-orange-300">
        <img className="rounded-full h-30 w-30 shadow-2xl shadow-orange-200" src="/naweed.png" alt="" />
        <CardTitle className="text-orange-200">Sayed Naweed Sayedy, Founder & CEO</CardTitle>
        <CardDescription>"At NotionSoft, our mission goes beyond delivering technology — we strive to create meaningful digital experiences that drive real business transformation. Every line of code, every process we optimize, and every solution we build is guided by our passion for excellence and innovation. We are not just a service provider — we are a long-term partner in our clients' growth journeys."</CardDescription>
      </Card>
      <div className="grid grid-cols-6 gap-60 mx-40 mb-20 mt-10 bg-[url('/bg-image.png')]  bg-center w-280 h-60">
      <Card className="flex items-center mb-2 mr-2 ml-5 p-5 bg-gradient-to-r from-gray-300 to-orange-200 text-black rounded-sm 
       shadow-lg w-50">
        <img className="rounded-full h-30 w-30 shadow-2xl shadow-orange-200 mb-2" src="/jala.jpeg" alt="" />
        <CardTitle className="text-black">Jalal Bakhty</CardTitle>
        <CardDescription>Co-Founder</CardDescription>
      </Card>
       <Card className="flex items-center mb-2 w-50 ml-2 mr-2 p-5 bg-gradient-to-r from-gray-300 to-orange-200 shadow-none 
       shadow-black rounded-sm">
        <img className="rounded-full h-30 w-30 shadow-2xl shadow-orange-200" src="/imran.png" alt="" />
        <CardTitle>Imran Orya</CardTitle>
        <CardDescription>Frontend Developer</CardDescription>
      </Card>
       <Card className="flex items-center mb-2 w-50 mr-5 ml-2 p-5 bg-gradient-to-r from-gray-300 to-orange-200 text-black rounded-sm shadow-black shadow-none">
        <img className="rounded-full h-30 w-30 shadow-2xl shadow-orange-200" src="/waheed.png" alt="" />
        <CardTitle>Waheed Safi</CardTitle>
        <CardDescription>Backend Developer</CardDescription>
      </Card>
       <Card className="flex items-center ml-5 w-50 mr-2 mb-3 p-5 bg-gradient-to-r from-gray-300 to-orange-200 text-black rounded-sm shadow-black 
       shadow-none">
        <img className="rounded-full h-30 w-30 shadow-2xl shadow-orange-200" src="/fardin.jpg" alt="" />
        <CardTitle>Fardin Ibrahimi</CardTitle>
        <CardDescription>AI Engineer</CardDescription>
      </Card>
       <Card className="flex items-center mr-5 w-50 ml-2 mb-3 p-5 bg-gradient-to-r from-gray-300 to-orange-200 text-black rounded-sm
        shadow-black shadow-none">
        <img className="rounded-full h-30 w-30 shadow-2xl shadow-orange-200" src="/nesar.jpg" alt="" />
        <CardTitle>Nesar Awwab</CardTitle>
        <CardDescription>Backend Developer</CardDescription>
      </Card>
      </div>
    </div>
      <Footer />

    </div>

  )
}


