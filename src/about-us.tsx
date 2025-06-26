import Header from './components/ui/header'
import { Info } from 'lucide-react';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function AboutUs() {
  return (
    <div className='grid grid-cols-1'>
            <Header />
        <h1 className='text-4xl text-center text-orange-300 mt-5'>About Us</h1>
        <h1 className='text-md text-center text-gray-400'>Our strength is in our unparalleled 
            commitment to care for your business and its changing needs.</h1>

        <div className='grid grid-cols-2 mt-10'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-orange-300'>Who We Are?</CardTitle>
                            <CardDescription>NotionSoft is a leading IT solution provider delivering innovative, secure, and scalable technology 
                                solutions across various industries. 
                                We specialize in AI, mobile and 
                                desktop app development, biometrics, network troubleshooting, and more, helping businesses 
                                transform digitally with ease and efficiency.</CardDescription>
                            <CardAction><Info className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/who-we-are.jpeg" alt="" className='w-70' />

                </Card>
        </div>
         <div className='grid grid-cols-2 mt-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-orange-300'>What We Do?</CardTitle>
                            <CardDescription>We build scalable digital technology solutions to encourage sustainable business growth.</CardDescription>
                            <CardAction><Info className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/about-us-whatWeDo.png" alt="" className='w-70' />

                </Card>
        </div>
         <div className='grid grid-cols-2 mt-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-orange-300'>Who We Help?</CardTitle>
                            <CardDescription>We help customers to adopt and migrate to new technologies, so businesses can modernize 
                                the way they operate and create unparalleled customer experiences.</CardDescription>
                            <CardAction><Info className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/about-us-whoWeHelp.jpg" alt="" className='w-70' />

                </Card>
        </div>
        <div className='grid grid-cols-2 mt-2'>
                <Card className='mt-10 mx-10 rounded-none shadow-none border-none'>
                        <CardHeader>
                            <CardTitle className='text-2xl text-orange-300'>Why Choose Us?</CardTitle>
                            <CardDescription>We are an innovative technology and digital partner. We endeavor to continue to inspire, transform, 
                                and create synergies that shape the digital world and ensure shared prosperity for all.</CardDescription>
                            <CardAction><Info className='text-orange-300' /></CardAction>
                        </CardHeader>
                </Card>
                <Card className='mx-10 my-10 rounded-none items-center p-0 shadow-none border-none'>
                       <img src="/about-us-whyChooseUs.jpg" alt="" className='w-70' />
                </Card>
        </div>
        <div className='grid grid-cols-1 mt-2'>
                <h1 className='text-orange-300 text-center text-3xl'>Core Values</h1>
                <div className='grid grid-cols-3 mt-5 mx-5 px-5'>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Integrity — Fair, transparent, and ethical conduct</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Innovation — Sustainable growth through creativity</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Empowerment — Turning challenges into opportunities</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Diversity — Embracing all cultures and perspectives</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Sustainability — Digital ecosystem for the future</Card>
                    <Card className='mx-3 my-3 px-5 bg-gradient-to-r from-gray-300 to-orange-300'>Shared Prosperity — Growth for all stakeholders</Card>
                </div>
        </div>
    </div>
  )
}

export default AboutUs