import Header from "@/components/header";
import GridLines from "@/components/shapes/grid-lines";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";
import Link from "next/link";

const services = [
  {
    title:
      "Dual-Energy X-Ray Absorptiometry (DEXA) Total Body Composition Scan",
    description:
      "Comprises fat mass, lean mass, bone mineral density, relative skeletal muscle index, resting metabolic rate, CoreScan (visceral and subcutaneous adipose tissue) + printed reports/analytics, including segmental (body region) and trend analytics",
    rates: [
      { label: "SLU Individual Rate", price: "$60" },
      { label: "SLU Group Rate (≥10 people)", price: "$50" },
      { label: "Non-SLU Individual Rate", price: "$75" },
      { label: "Non-SLU Group Rate (≥10 people)", price: "$60" },
      { label: "Funded Research Rate (Local)", price: "$75" },
      { label: "Funded Research Rate (Federal/International)", price: "$100" },
    ],
  },
  {
    title: "Lower Extremity Strength and Balance Testing",
    description:
      "Comprises objective isometric dynamometry and Biodex Biosway metrics + reports and analytics (both limbs)",
    rates: [
      { label: "SLU Individual Rate", price: "$40" },
      { label: "SLU Group Rate (≥10 people)", price: "$30" },
      { label: "Non-SLU Individual Rate", price: "$60" },
      { label: "Non-SLU Group Rate (≥10 people)", price: "$40" },
      { label: "Funded Research Rate (Local)", price: "$60" },
      { label: "Funded Research Rate (Federal/International)", price: "$80" },
    ],
  },
];

const workshops = [
  "Injury Prevention Workshop for Coaches (Online, Hybrid or In-Person)",
  "Group Pickleball Injury Prevention Workshop",
];

const scheduleEmail = (
  <Link
    href="mailto:tip.lab@health.slu.edu"
    className="text-indigo-600 hover:text-indigo-500 underline font-medium"
  >
    tip.lab@health.slu.edu
  </Link>
);

export default async function CommunityTesting() {
  return (
    <div>
      <Header />
      <div className="relative isolate">
        <GridLines />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <LeftCircularShape />
        </div>
        <div className="overflow-hidden mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <h1 className="text-4xl pb-12 text-center font-bold tracking-tight text-gray-900">
            Community Testing and Workshops
          </h1>

          <div className="mx-auto max-w-3xl space-y-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6 -mx-8 divide-y divide-gray-200 border-t border-gray-200">
                  {service.rates.map((rate) => (
                    <div
                      key={rate.label}
                      className="flex items-center justify-between px-8 py-3"
                    >
                      <span className="text-base text-gray-700">
                        {rate.label}
                      </span>
                      <span className="text-base font-semibold text-gray-900">
                        {rate.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-2xl mt-10 text-center space-y-4">
            <p className="text-base text-gray-600">
              Only cash or checks are accepted for payment.
            </p>
            <p className="text-lg text-gray-600">
              Email Dr. Olu Owoeye at {scheduleEmail} to schedule an
              appointment.
            </p>
          </div>

          <div className="mx-auto max-w-2xl mt-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Location
            </h2>
            <p className="mt-4 text-gray-600">
              3437 Caroline Street, Suite 1023 Allied Health Building, St.
              Louis, MO, 63104
            </p>
          </div>

          <p className="mx-auto max-w-3xl mt-12 text-center text-sm text-gray-600">
            The rates above support the Translational Injury Prevention
            Lab&apos;s mission to advance research, education, and community
            engagement, offering reduced-cost access to wellness and
            evidence-based injury risk assessments. SLU affiliates receive
            discounted rates with valid ID, and group pricing applies to
            concurrent assessments; customized services may vary based on
            scope and requirements e.g., research collaboration, corporate
            wellness initiatives. For example, region specific scans and/or 
            advanced measures e.g., TBS in the spine starts from $150.
          </p>

          <div className="mx-auto max-w-3xl mt-20 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
              FREE Workshops
            </h2>
            <div className="mt-10 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10 p-8">
              <ul className="space-y-3 text-lg text-gray-600 list-disc list-inside marker:text-indigo-600">
                {workshops.map((workshop) => (
                  <li key={workshop}>{workshop}</li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-lg text-gray-600 text-center">
              Email Dr. Olu Owoeye at {scheduleEmail} to schedule an
              appointment.
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
