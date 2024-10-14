import Header from "@/components/header";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <LeftCircularShape />
        </div>
        <div className="mx-auto max-w-2xl py-40 sm:py-48 lg:py-48">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Saint Louis University looking for pickleball players...{" "}
              <Link href="/news" className="font-semibold text-indigo-600">
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Translational Sports Injury Prevention Lab
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Based out of SLU, the TIP Lab is committed to reducing the risk of
              sport-related injuries and associated consequences.
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
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Our Team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <RightCircularShape />
        </div>
      </div>
    </div>
  );
}
