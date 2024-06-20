"use client";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import Newsletter from "@/components/forms/newsletter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const news = [
  {
    title: "Hic vel totam vitae illo. Non auid explicabo",
    href: "#",
    description:
      "Illo sint voluptas. Error voluates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2023",
    datetime: "2020-03-16",
  },
  {
    title: "Hic vel totam vitae illo. Non aquid excabo",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 10, 2023",
    datetime: "2020-03-10",
  },
  {
    title: "Hic vel tam vitae illo. Non aliquid explicabo",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Feb 12, 2023",
    datetime: "2020-02-12",
  },
  {
    title: "Hic vel totam vitae. Non aliquid explicabo",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Jan 29, 2023",
    datetime: "2020-01-29",
  },
  {
    title: "Hic vel totam illo. Non aliquid explicabo",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Jan 29, 2023",
    datetime: "2020-01-29",
  },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
  },
];

export default function News() {
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
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perferendis suscipit
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
        </div>
        <Newsletter />
        <div className="pt-32 space-y-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {news.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <Link href="#" className="mt-2 block">
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
