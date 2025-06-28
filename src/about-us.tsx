import Header from './components/ui/header'
import { Info, Settings, HeartHandshake, MousePointerClick, User, Mail, MessageCircle} from 'lucide-react';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from './components/ui/button';
import Footer from './components/ui/footer';
import {Input} from './components/ui/input';
import { Textarea } from "@/components/ui/textarea"

function AboutUs() {
  return (
    <div className='grid grid-cols-1'>
            <Header />
        <h1 className='text-4xl text-center text-orange-300 mt-5'>About Us</h1>
        <h1 className='text-md text-center text-gray-400'>Our strength is in our unparalleled 
            commitment to care for your business and its changing needs.</h1>

        <div className='grid grid-cols-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-white bg-gradient-to-r from-orange-300 to-white rounded-l-md pl-2'>Who We Are?</CardTitle>
                            <CardDescription>NotionSoft is a leading IT solution provider delivering innovative, secure, and scalable technology 
                                solutions across various industries. 
                                We specialize in AI, mobile and 
                                desktop app development, biometrics, network troubleshooting, and more, helping businesses 
                                transform digitally with ease and efficiency.</CardDescription>
                            <CardAction><Info className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/who-we-are.jpeg" alt="" className='w-70 shadow-2xl shadow-gray-700 border-orange-500 border-3' />

                </Card>
        </div>
         <div className='grid grid-cols-2 mt-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-white bg-gradient-to-r from-orange-300 to-white 
                            rounded-l-md pl-2'>What We Do?</CardTitle>
                            <CardDescription>We build scalable digital technology solutions to encourage sustainable business growth.</CardDescription>
                            <CardAction><Settings className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/about-us-whatWeDo.png" alt="" className='w-70 shadow-2xl shadow-gray-700 border-orange-500 border-3' />

                </Card>
        </div>
         <div className='grid grid-cols-2 mt-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-white bg-gradient-to-r from-orange-300 to-white rounded-l-md pl-2'>Who We Help?</CardTitle>
                            <CardDescription>We help customers to adopt and migrate to new technologies, so businesses can modernize 
                                the way they operate and create unparalleled customer experiences.</CardDescription>
                            <CardAction><HeartHandshake className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/about-us-whoWeHelp.jpg" alt="" className='w-70 shadow-2xl shadow-gray-700 border-orange-500 border-3' />

                </Card>
        </div>
        <div className='grid grid-cols-2 mt-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-white bg-gradient-to-r from-orange-300 to-white rounded-l-md pl-2'>Why Choose Us?</CardTitle>
                            <CardDescription>We are an innovative technology and digital partner. We endeavor to continue to inspire, transform, 
                                and create synergies that shape the digital world and ensure shared prosperity for all.</CardDescription>
                            <CardAction><MousePointerClick className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/about-us-whyChooseUs.jpg" alt="" className='w-70 shadow-2xl shadow-gray-700 border-orange-500 border-3' />
                </Card>
        </div>
        <div className='grid grid-cols-1 mt-20'>
                <h1 className='text-orange-300 text-center text-3xl'>Core Values</h1>
                <div className='grid grid-cols-3 mt-5 mx-5 px-5'>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Integrity — Fair, transparent, and ethical conduct</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Innovation — Sustainable growth through creativity</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Empowerment — Turning challenges into opportunities</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Diversity — Embracing all cultures and perspectives</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Sustainability — Digital ecosystem for the future</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Shared Prosperity — Growth for all stakeholders</Card>
                </div>
                                <div className='grid grid-cols-1 mt-20 mb-20'>
                                    <h1 className = "text-4xl text-center text-orange-300 mb-5">Contact Us</h1>
                                <Card className="max-w-xl mx-auto mt-16 rounded-3xl border border-orange-100 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                <CardContent className="p-10 space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
                    ✉️ Contact Us
                    </h2>

                    <div className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-4 top-3.5 text-orange-500" size={22} />
                        <Input
                        type="text"
                        placeholder="Your Name"
                        className="pl-12 py-3 rounded-2xl border border-orange-200 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-orange-500" size={22} />
                        <Input
                        type="email"
                        placeholder="Your Email"
                        className="pl-12 py-3 rounded-2xl border border-orange-200 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="relative">
                        <MessageCircle className="absolute left-4 top-3.5 text-orange-500" size={22} />
                        <Textarea
                        placeholder="Your Message"
                        className="pl-12 py-3 rounded-2xl border border-orange-200 bg-white/70 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                        rows={5}
                        />
                    </div>
                    </div>

                    <Button className="w-full py-3 font-semibold text-white rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:brightness-110 hover:scale-[1.01] transition-transform duration-300">
                    Send Message
                    </Button>
                </CardContent>
                </Card>

                </div>

                <Footer />
        </div>
    </div>
  )
}

export default AboutUs