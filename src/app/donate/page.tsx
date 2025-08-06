import Header from "@/components/header";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";
import Link from "next/link";
import Image from "next/image";

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

          <div className="bg-gray-100 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Instructions:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>
                In the &quot;select an area of support&quot; dropdown on the SLU
                gift donation page, select &quot;search for a specific
                fund&quot;
              </li>
              <li>
                Type &quot;Translational Injury Prevention Lab Support
                Fund&quot;
              </li>
              <li>
                Enter gift amount and complete the contact information and
                payment details
              </li>
            </ol>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-900">
              Thank you for making a difference!
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
