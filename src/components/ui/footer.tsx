    import { MapPinHouse, Mail, Phone, Home, Settings, Info } from 'lucide-react';
    import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
    
    export default function Footer() {
  return (
    <div className = "bottom-0 grid grid-cols-3 bg-gradient-to-r from-orange-200 to-gray-200">
      <div className="mx-5 my-5">
             <Card className="rounded-1xl w-80 items-center border-none shadow-none bg-transparent">
              <CardTitle><img src = "/notionsoft-logo.png" className="w-50 px-5"></img></CardTitle>
              <CardDescription className = "text-center text-gray-500">Empowering digital transformation with innovative, secure, and scalable solutions.</CardDescription>
            </Card>
      </div>
      <div className="mx-5 my-5">
             <Card className="rounded-1xl w-80 items-center border-none shadow-none bg-transparent">
              <CardTitle>Quick Links</CardTitle>
              <div>
                <div className="flex flex-row mb-2"><Home className = "text-orange-300" /><a href = "/home" className = "border-b-2 border-orange-300 ml-2">Home</a></div>
              <div className="flex flex-row mb-2"><Settings className = "text-orange-300" /><a href = "/services" className = "border-b-2 border-orange-300 ml-2">Services</a></div>
              <div className="flex flex-row mb-2"><Info  className = "text-orange-300" /><a href = "/about-us" className = "border-b-2 border-orange-300 ml-2">About Us</a></div>
              <div className="flex flex-row mb-2"><Phone className = "text-orange-300" /><a href = "/contact-us" className = "border-b-2 border-orange-300 ml-2">Contact Us</a></div>
              </div>
              
            </Card>
      </div>
       <div className="mx-5 my-5">
             <Card className="rounded-1xl w-80 items-center border-none shadow-none bg-transparent">
              <CardTitle className='mr-30'>Contact</CardTitle>
              <div className="grid grid-rows-3 gap-2">
          <div className = "flex flex-row"><MapPinHouse className="text-orange-300" /><span className = "ml-2">Shahr Naw, Kabul, AFG</span></div>
                <div className = "flex flex-row"><Mail className="text-orange-300" /><span className = "ml-2">info@notionsoft.com</span></div>
                <div className = "flex flex-row"><Phone className="text-orange-300" /><span className = "ml-2">0799769626</span></div>
              </div>
            </Card>
      </div>
    </div>

  )
}