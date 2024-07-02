"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import Newsletter from "@/components/forms/newsletter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import NewsImage1 from "../../../public/images/news-image-1.png";
import NewsImage2 from "../../../public/images/news-image-2.png";
import NewsImage3 from "../../../public/images/news-image-3.png";

const news = [
  {
    title:
      "Saint Louis University looking for pickleball players to participate in study",
    description:
      "Olu Owoeye, Ph.D. (Physical Therapy and Athletic Training) was quoted on KMOV-TV Ch. 4 and KFVS-TV Ch. 12 as he calls for pickleball players to participate in a new study about injuries and health playing the sport. Click here to see more!",
    date: "Jun 17, 2024",
    datetime: "2024-06-17",
    link: "https://firstalert4.com/2024/06/05/saint-louis-university-looking-pickleball-players-participate-study/",
  },
  {
    title: "New Publication",
    description:
      "This study is first to provide weight-normalized values for peak isometric hams & quads strength using a low-cost hand-held dynamometer. The normative database from this study is valuable to coaches, med team, S&Cs for injury risk mitigation and return to play decisions.",
    date: "Jun 13, 2024",
    datetime: "2024-06-13",
    link: "https://digitalcommons.wku.edu/cgi/viewcontent.cgi?article=3743&context=ijes",
  },
  {
    title: "SPIN",
    description:
      "Pickleball is the fastest growing sport in the United States! Do you play pickleball at least once a month? Please scan the QR code or click here on the flyer for more info and compete our survey.",
    date: "May 29, 2024",
    datetime: "2024-05-29",
    link: "https://slu.az1.qualtrics.com/jfe/form/SV_5zQHR5pGVqt9jzo",
  },
];

const images = [
  {
    src: NewsImage1,
    alt: "Olu Owoeye, Ph.D.",
  },
  {
    src: NewsImage2,
    alt: "SPIN",
  },
  {
    src: NewsImage3,
    alt: "New Publication",
  },
];

const headlines = [
  {
    text: "Pickleball Players",
    link: "https://www.firstalert4.com/2024/06/05/saint-louis-university-looking-pickleball-players-participate-study/",
  },
  {
    text: "SPIN",
    link: "https://slu.az1.qualtrics.com/jfe/form/SV_5zQHR5pGVqt9jzo",
  },
  {
    text: "New Publication",
    link: "https://digitalcommons.wku.edu/cgi/viewcontent.cgi?article=3743&context=ijes",
  },
];

const descriptions = [
  "Saint Louis University is looking for pickleball players to study the game's injuries and health benefits. Click here to participate in the research study.",
  "Do you play pickleball at least once a month? Please scan the QR code on the flyer for more info and compete our survey.",
  "This study is first to provide weight-normalized values for peak isometric hams & quads strength using a low-cost hand-held dynamometer. ",
];

export default function News() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <LeftCircularShape />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-32">
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="mb-[-10%] rounded-xl shadow-2xl ring-1 ring-white/10"
                    width={2432}
                    height={1442}
                  />
                  <div className="relative" aria-hidden="true">
                    <div className="absolute -inset-x-0 bottom-0 bg-gradient-to-t from-white pt-[10%]" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Latest News
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-2"
              >
                <Link
                  href={headlines[index].link}
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  {headlines[index].text}
                </Link>
              </motion.div>
              <motion.p
                key={`desc-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-500"
              >
                {descriptions[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <Newsletter />
        <div className="py-32 space-y-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {news.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <Link href={post.link} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
