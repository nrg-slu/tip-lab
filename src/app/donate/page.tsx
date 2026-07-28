import Header from "@/components/header";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";
import Link from "next/link";
import Image from "next/image";
import LightboxImage from "@/components/lightbox-image";

const ticketPrices = [
  { label: "Student Registration", price: "$25 individual / $50 pair" },
  { label: "General Registration", price: "$50 individual / $100 pair" },
];

export default function Donate() {
  return (
    <div>
      <Header />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <LeftCircularShape />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <h1 className="text-4xl pb-12 text-center font-bold tracking-tight text-gray-900">
          Support the TIP Lab
        </h1>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg text-gray-600">
            Help us advance injury prevention research and keep athletes of all
            ages safe and active.
          </p>

          <p className="text-lg text-gray-600">
            Your donation directly supports our work in developing, testing, and
            sharing evidence-based strategies to reduce sports and exercise
            injuries and promote wellness.
          </p>
        </div>

        <div className="sticky top-4 z-10 mx-auto mt-8 flex max-w-fit flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold shadow-lg ring-1 ring-gray-900/10 backdrop-blur">
          <Link
            href="#upcoming-events"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Upcoming Event
          </Link>
          <Link
            href="#become-a-sponsor"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Become a Sponsor
          </Link>
          <Link
            href="#donate"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Donate
          </Link>
        </div>

        <div
          id="upcoming-events"
          className="mx-auto max-w-3xl mt-12 scroll-mt-32"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Upcoming Event
          </h2>
          <div className="mt-10 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 p-8">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Dink for a Difference: Pickleball Tournament &amp; Fundraiser
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              Friday, September 11, 2026 · 6:00 PM – 9:30 PM
            </p>
            <p className="mt-1 text-lg text-gray-600">
              Missouri Pickleball Club, 747 Gravois Bluffs Blvd, Fenton, MO
              63026
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Join friends and supporters in making sports and exercise safer
              for youth and adults. All skill levels are welcome!
            </p>
            <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
              {ticketPrices.map((ticket) => (
                <div
                  key={ticket.label}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-base text-gray-700">
                    {ticket.label}
                  </span>
                  <span className="text-base font-semibold text-gray-900">
                    {ticket.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="https://engage.slu.edu/register/tiplabfundraiser"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register Now
              </Link>
            </div>
            <LightboxImage
              src="/images/events/pickleball-fundraiser-flyer.png"
              alt="Dink for a Difference pickleball tournament and fundraiser flyer"
              className="mt-8 max-w-sm mx-auto"
            />
          </div>
        </div>

        <div
          id="become-a-sponsor"
          className="mx-auto max-w-3xl mt-12 scroll-mt-32"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Become a Sponsor
          </h2>
          <div className="mt-10 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 p-8">
            <p className="text-lg text-gray-600">
              Sponsorship tiers range from $100 to $1,500 and include benefits
              like logo placement, social media recognition, team registrations,
              and website recognition. Contact Kathryn Dortch at{" "}
              <Link
                href="mailto:kathryn.dortch@slu.edu"
                className="text-indigo-600 hover:text-indigo-500 underline font-medium"
              >
                kathryn.dortch@slu.edu
              </Link>{" "}
              by Sept. 1 to become a sponsor.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Questions about the event? Contact Theodore Yemm at{" "}
              <Link
                href="mailto:theodore.yemm@health.slu.edu"
                className="text-indigo-600 hover:text-indigo-500 underline font-medium"
              >
                theodore.yemm@health.slu.edu
              </Link>
              .
            </p>
            <LightboxImage
              src="/images/events/pickleball-sponsorship-flyer.png"
              alt="2026 TIP Lab pickleball tournament sponsorship opportunities and benefits by tier"
              className="mt-8 max-w-sm mx-auto"
            />
          </div>
        </div>

        <div
          id="donate"
          className="mx-auto max-w-2xl mt-12 scroll-mt-32 space-y-6 border-t border-gray-200 pt-10"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            Donate
          </h2>
          <div className="mt-8 mb-8">
            <p className="text-lg text-gray-600">
              Donate to the TIP Lab{" "}
              <Link
                href="https://engage.slu.edu/register/fund?sys:gift:fund=d4510e5c-e8a4-33d8-0c2e-206a9f1ea0c6&sys:gift:notes=OEVT9999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline font-medium"
              >
                here
              </Link>
            </p>
            <p className="text-lg text-gray-600">Or scan the QR code below:</p>
            <Image
              src="/images/qr-code.jpg"
              alt="QR Code"
              width={200}
              height={200}
            />
          </div>

          <div className="mt-12 text-center space-y-2">
            <p className="text-xl font-semibold text-gray-900">
              Thank you for making a difference!
            </p>
            <p className="text-xs text-gray-900">
              *All donations are tax deductible!
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <RightCircularShape />
        </div>
      </div>
    </div>
  );
}
