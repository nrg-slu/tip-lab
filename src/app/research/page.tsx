import Header from "@/components/header";
import GridLines from "@/components/shapes/grid-lines";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import ResearchImage1 from "../../../public/images/research-image-1.jpg";
import ResearchImage2 from "../../../public/images/research-image-2.jpg";
import ResearchImage3 from "../../../public/images/research-image-3.jpg";
import ResearchImage4 from "../../../public/images/research-image-4.jpg";
import ResearchImage5 from "../../../public/images/research-image-5.png";
import ResearchProjectImage1 from "../../../public/images/research-project-image-1.png";
import ResearchProjectImage2 from "../../../public/images/research-project-image-2.jpg";
import ResearchProjectImage4 from "../../../public/images/research-project-image-4.png";
import Link from "next/link";

export default function Research() {
  return (
    <div>
      <Header />
      <div className="relative isolate">
        <GridLines />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <LeftCircularShape />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We&apos;re reducing the risk of sport-related injuries
                </h1>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                </p> */}
                <div className="mt-10 flex justify-center">
                  <ArrowDownIcon className="h-6 w-6 animate-bounce" />
                </div>
              </div>
              <div className="mt-14 flex flex-col sm:flex-row justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-full sm:w-44 flex-none space-y-8 pt-8 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src={ResearchImage1}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={3087}
                      height={2048}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-full sm:w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src={ResearchImage2}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={3087}
                      height={2048}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={ResearchImage3}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={3087}
                      height={2048}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-full sm:w-44 flex-none space-y-8 pt-8 sm:pt-0">
                  <div className="relative">
                    <Image
                      src={ResearchImage4}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={3087}
                      height={2048}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={ResearchImage5}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={3087}
                      height={2048}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center px-6">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Translational Injury Prevention Lab
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Research
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p> */}
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4 order-2 lg:order-2">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    MAP for Coaches
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    With over 45 million school sports and organized
                    community-based youth (defined as age 6 to 17 years)
                    programs in the United States, the potential for youth
                    sports injuries is enormous. Of greatest burden are
                    musculoskeletal injuries, i.e., muscle, joint (e.g., tendons
                    and ligaments) and bone injuries, particularly in team
                    sports such as youth football, basketball, soccer and
                    volleyball. Coaches have a crucial role to play in ensuring
                    the safety of their players.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The MAP for Coaches is a novel eLearning tool freely
                    available to youth sport coaches in the United States and
                    around the world. Our goal is to increase coaches&apos;
                    knowledge regarding musculoskeletal injury prevention and
                    empower them to implement current and best injury prevention
                    practices towards reducing injuries and enhancing
                    performance in youth sport athletes.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    We are looking for youth sports coaches (from parent coaches
                    to high school/club coaches) to help improve this online
                    training course! Please follow the link below to complete
                    the course and study surveys if you coach youth football,
                    soccer, basketball or volleyball.
                  </p>
                  <div className="mt-6 text-lg leading-8 text-indigo-600">
                    <Link href="https://mapforcoaches.net/">
                      https://mapforcoaches.net/
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-end order-1 lg:order-1">
                <Image
                  src={ResearchProjectImage1}
                  alt=""
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4 order-2 lg:order-2">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    SPIN Project
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Pickleball is the fastest growing sport in the United
                    States, but there remains limited data to inform injury
                    prevention among players! The SPIN Project is a series of
                    studies that aims to fill the limited data gap. It will
                    provide a more accurate account of injury burden and risk
                    factors and establish pragmatic injury prevention strategies
                    across levels of play.
                  </p>
                  <div className="mt-6 text-lg leading-8 text-gray-600">
                    <span>
                      You are eligible to participate in the current SPIN survey
                      if you are ≥18 years and play pickleball at least once a
                      month? Please learn more and complete the anonymous survey
                      here:
                    </span>{" "}
                    <Link href=" https://slu.az1.qualtrics.com/jfe/form/SV_5zQHR5pGVqt9jzo">
                      https://slu.az1.qualtrics.com/jfe/form/SV_5zQHR5pGVqt9jzo
                    </Link>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Or scan the QR code on the flyer for more information and to
                    complete the survey.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start order-1 lg:order-last">
                <Image
                  src={ResearchProjectImage2}
                  alt=""
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4 order-2 lg:order-2">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    NEISS Project
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    A large population of the US participates in sports,
                    exercise, or recreational activity throughout the week.
                    However, there is not much information available regarding
                    the incidence, prevalence, and risk factors of related
                    injuries in varying activities. This study aims to describe
                    the epidemiology of injuries related to sports, exercise,
                    and recreational activity among adults aged 20 to 85+ years
                    old that present to the US emergency department from
                    2013-2022. We are using the National Electronic Injury
                    Surveillance System (NEISS) to perform a retrospective
                    analysis on 20+ year olds presenting to the US emergency
                    departments with sports, exercise, or recreational activity
                    related injuries.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-end order-1 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4 order-2 lg:order-2">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    RICHLoad
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    RICHLoad, meaning Reducing Injuries in Competitive atHletes
                    through integrated load management, is a multi-year project
                    that aims to establish best practices for soccer, basketball
                    and running athletes to manage (monitor, evaluate and
                    intervene) their athletic workload in consideration with
                    other important broad variables related to recovery and
                    capacity. The RICHLoad algorithm is evidence-informed and
                    available to all athletes globally free of charge. Download
                    the app and use it regularly to help us improve the
                    app&apos;s functionality and effectiveness.
                  </p>
                  <div className="mt-6 text-lg leading-8 text-gray-600">
                    <span>Learn more and download the app here:</span>{" "}
                    <Link href="https://richload.app/">
                      https://richload.app/
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start order-1 lg:order-last">
                <Image
                  src={ResearchProjectImage4}
                  alt=""
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  width={2432}
                  height={1442}
                />
              </div>
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
