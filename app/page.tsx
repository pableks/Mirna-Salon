"use client"
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useShowUp, type ShowUpComponent } from 'use-show-up';
import Ad from '@/components/ad'
import { useInView } from 'react-intersection-observer';

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import * as React from "react"
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion";

export default function Page() {
  const [servicesRef, inViewServices] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Set the threshold for when to trigger the animation
  });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const expandTimeout = setTimeout(() => {
      setExpanded(true);
    }, 3000);

    const revertTimeout = setTimeout(() => {
      setExpanded(false);
    }, 10000); // 3 seconds for expansion + 10 seconds to revert

    return () => {
      clearTimeout(expandTimeout);
      clearTimeout(revertTimeout);
    };
  }, []);

  const containerVariants = {
    collapsed: { width: 'auto', height: 'auto', padding: '0.5rem' },
    expanded: { width: 'auto',  padding: '0.5rem' }, // Adjust height as needed
  };

  const textVariants = {
    collapsed: { opacity: 0, width: 0, height: 0, translateY: -12},
    expanded: { opacity: 1, width: '160px', height: 0, translateY: -12 },
  };

  return (
    
     <div className="flex flex-col min-h-screen relative overflow-hidden">
     
      <div className="absolute inset-0 z-[-2] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 z-[-3] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,0,0,0.13)_0,rgba(255,0,0,0)_50%,rgba(255,0,0,0)_100%)]"></div>
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      
        <Link className="flex items-center justify-center" href="#">
          <ScissorsIcon className="h-6 w-6" />
          <span className="sr-only">Beauty Salon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contacto
          </Link>
        </nav>
      </header>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay:2.5, duration: 1 }}>
      
      <header className="px-4 lg:px-6 h-8 flex items-center border-b bg-red-500 text-white text-sm relative overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <motion.div
            initial={{opacity: 0.8,  x: '100%' }}
            animate={{opacity: 1, x: '-100%' }}
            transition={{ delay: 1, duration: 15, ease: 'linear', repeat: Infinity }}
            className="relative"
          >
            <p className="animate-marquee whitespace-nowrap">Encuentranos en nuestro nuevo local, ubicado en Galería Manquehue, 7 oriente entre 1 sur y 1 norte, Talca.</p>
          </motion.div>
        </div>
      </header>
      </motion.div>


      <section className="w-full pt-12 pb-8 md:pt-16 lg:pt-16">
        
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         <div className="flex justify-center">
              <img src="/mirnalogo.svg" alt="Mirna Salon Logo" width={200} height={200} />
            </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ delay: 1, duration: 1 }}
        >
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400">
                Ven a vivir una experiencia de primera categoría en uno de los salones de belleza más aclamados dentro de Talca.
              </p>
            </div>
            </motion.h1>
          </div>
        </div>
        
      </section>
     

      <section className="w-full">
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
        <div className="flex justify-center">
          
          <Carousel className="md:p-0 lg:pl-32 lg:pr-32 lg:pt-8"
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnFocusIn: false,
              stopOnInteraction: false,
              stopOnMouseEnter: true,


            }),
          ]}
    >
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Card>
                      <CardContent className="flex  items-center justify-center p-0">
                      <Image
                      
              src={`/images/carousel/image-${index + 1}.jpeg`} // Replace with your image paths
              alt={`Image ${index + 1}`}
              width={1700} // Adjust width and height according to your design
              height={899}
              
            />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
        
     
          </Carousel>
        </div>
        </motion.h1>
      </section>
        
      <section className="w-full py-12 md:py-24 lg:py-12" id="services" ref={servicesRef}>
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Initial animation properties
    animate={inViewServices ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
    transition={{ duration: 1 }} // Animation duration
  >
          <div className="container space-y-12 px-4 md:px-6">
            
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-5 pmt-[-18px]">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1  text-sm dark:bg-gray-800 ">
                  Nuestros Servicios
                </div>
                <div className="flex flex-col pt-8 items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2">
      <Image className="lg:pr-8" src="/beautylogo.svg" alt="Mirna Salon Logo" width={250} height={250} />
        
      </div>
      <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 md:text-left md:self-center">
        
Descubre en Mirna Salón una experiencia completa de belleza y bienestar: desde cortes y peinados vanguardistas hasta tratamientos capilares rejuvenecedores, maquillaje profesional y depilación especializada con enfoque en la comodidad del cliente. Con nuestro equipo de estilistas expertos y servicios personalizados de cuidado facial y corporal, ofrecemos resultados impecables y asesoramiento continuo para realzar tu belleza natural.  
      </p>
    </div>
    <Separator className="my-4 border-b" />
    
    <div className="flex flex-col pt-8 pb-16 items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2">
      <img className="lg:pr-8" src="/barberlogo.svg" alt="Mirna Salon Logo" width={250} height={250} />
      </div>
      <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 md:text-left md:self-center">
      En nuestra Barbería, sumérgete en una experiencia de cuidado masculino excepcional. Desde cortes de vanguardia hasta un afeitado preciso, ofrecemos servicios de barbería de alta calidad. Con barberos expertos y atención personalizada, disfruta de un ambiente acogedor donde la tradición se une a la modernidad. Descubre en nuestra Barbería el arte de la auténtica masculinidad y el cuidado experto para tu estilo único.
      </p>
    </div>  
            
            
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra experiencia es tu seguridad</h2>
                <div className="p-0 container flex justify-center items-center">

                <img className="lg:pr-8" src="/image-cut.jpg" alt="Mirna Salon Logo" width={800} height={800} />
                </div>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Años de experiencia avalan el trabajo que realizamos en nuestro salón, puedes contar con nosotros para encontrar el estilo que está en tu mente y tu corazón.
                </p>
              </div>
            </div>
            
          </div>
          
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Te esperamos</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ven a conocernos en nuestro nuevo local ubicado en la Galería Manquehue, 7 oriente entre 1 norte y 1 sur, en el centro de Talca. Te esperamos!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                “Te ves bien, te sientes mejor.”
              </blockquote>
              <div>
                <div className="font-semibold">Mirna Lagos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Estilista profesional, fundadora de Mirna Salón.</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">+ (569) 76953556</div>

              </div>
            </div>
          </div>
        </section>
        
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Mirna Salón 2024. Todos los derechos reservados.</p>
      
        <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial="collapsed"
      animate={expanded ? 'expanded' : 'collapsed'}
      variants={containerVariants}
      transition={{  duration: 3 }} // Adjust delay and duration as needed
    >
      <motion.a
        href="https://wa.me/56976953556"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-black text-white rounded-full px-3 py-1 shadow"
        variants={containerVariants}
      >
        <motion.span className='pr-1'>
  {expanded && 'Agenda tu hora aquí.'}
</motion.span>
        <FaWhatsapp className="position-fixed h-8 w-8 pr-1" />
      </motion.a>
    </motion.div>
      </footer>
    
      </div>
      
      
      
  );
  function ScissorsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
      </svg>
    )
  }

  
}
