import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 -z-10" />

      {/* Existing Content */}
      <div className="relative z-10">
        <Header darkMode />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-40 sm:py-48 lg:py-48">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-xs text-white ring-1 ring-white">
                New Publications!{" "}
                <Link
                  href="/publications"
                  className="font-semibold text-indigo-600"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Translational Injury Prevention Lab
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Based out of Saint Louis University, the TIP Lab is committed to
                advancing sports and exercise injury prevention and
                musculoskeletal health through high quality knowledge
                translation research and practical solutions that enhance the
                safety and wellbeing of athletes and active individuals
                worldwide.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/research"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Our Research
                </Link>
                <Link
                  href="/team"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Our Team <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
