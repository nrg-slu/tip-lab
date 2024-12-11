import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import EvanHeadshot from "../../../public/images/headshots/evan.png";
import HarperHeadshot from "../../../public/images/headshots/harper.png";
import JackHeadshot from "../../../public/images/headshots/jack.png";
import JemmaHeadshot from "../../../public/images/headshots/jemma.png";
import LukeHeadshot from "../../../public/images/headshots/luke.png";
import MalloryHeadshot from "../../../public/images/headshots/mallory.png";
import MeenaHeadshot from "../../../public/images/headshots/meena.png";
import MitchellHeadshot from "../../../public/images/headshots/mitchell.png";
import NataniaHeadshot from "../../../public/images/headshots/natania.png";
import NickHeadshot from "../../../public/images/headshots/nick.png";
import NoahHeadshot from "../../../public/images/headshots/noah.png";
import OluHeadshot from "../../../public/images/headshots/olu.png";
import ShreyaHeadshot from "../../../public/images/headshots/shreya.png";
import TravisHeadshot from "../../../public/images/headshots/travis.png";
import DavieHeadshot from "../../../public/images/headshots/davie.jpg";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import TeamImage from "../../../public/images/team-image.png";
import React from "react";

const people = [
  {
    name: "Olu Owoeye, Ph.D.",
    role: "Director of the Translational Sports Injury Prevention (TIP) Lab",
    imageUrl: OluHeadshot,
    link: "",
    bio: "Dr. Owoeye's research focuses on the generation and implementation of knowledge that informs the prevention of sport-related injuries and consequences in youth and young adults.",
  },
  {
    name: "Davie Mulenga",
    role: "1ST Year PhD Student",
    imageUrl: DavieHeadshot,
    link: "",
    bio: "Hometown: Zambia (Lusaka)\nInvolvement: Public Health Research\nFavorite Sport: Soccer\nResearch interest: Sports epidemiology , cancer rehabilitation and implementation research focusing on prevention, Rehabilitation and cancer survivorship",
  },
  {
    name: "Jack Hageman",
    role: "Professional Year 3, Physical Therapy",
    imageUrl: JackHeadshot,
    link: "",
    bio: "Hometown: Appleton, WI\nInvolvement: Club Tennis, Photography Club\nFavorite sports: Basketball, tennis, soccer\nResearch interests: Injury prevention",
  },
  {
    name: "Mallory Hill",
    role: "Professional Year 3, Physical Therapy",
    imageUrl: MalloryHeadshot,
    link: "",
    bio: "Hometown: Woodstock, IL\nInvolvement: Labre, Wilderness Adventure Club\nFavorite sports: Tennis, hiking, biking, climbing\nResearch Interests: Injury prevention, open to new topics!",
  },
  {
    name: "Natania Nguyen",
    role: "Professional Year 3, Physical Therapy",
    imageUrl: NataniaHeadshot,
    link: "",
    bio: "Hometown: Houston, TX\nInvolvement: N/A\nFavorite sports: Figure skating, ballet\nResearch Interests: Neurodevelopmental pediatrics, play therapy",
  },
  {
    name: "Nick Kolesky",
    role: "3rd year PhD student",
    imageUrl: NickHeadshot,
    link: "",
    bio: "Hometown: Anchorage, AK\nInvolvement: Public health research\nFavorite sports: soccer, cross country\nResearch Interests: socioeconomic factors underlying obesity, injury prevention",
  },
  {
    name: "Noah Vermette",
    role: "3rd year Med student",
    imageUrl: NoahHeadshot,
    link: "",
    bio: "Hometown: St. Louis, MO\nInvolvement: Specialty interest groups\nFavorite sports: NFL football, likes to play all sports besides soccer\nResearch Interests: injury risk and injury recovery",
  },
  {
    name: "Luke Wegenka",
    role: "3rd year Med student",
    imageUrl: LukeHeadshot,
    link: "",
    bio: "Hometown: Springfield, MO\nInvolvement: SOM Student Council, Military Medicine Interest Group Lead, Let's PLAY Service Group Lead\nFavorite sports: football, cross country and track and field\nResearch Interests: Sports injuries, distance runners' injury risks, outcomes, success/rates",
  },
  {
    name: "Mitchell Wayne",
    role: "Professional Year 1, Physical Therapy",
    imageUrl: MitchellHeadshot,
    link: "",
    bio: "Hometown: Lake Zurich, IL\nInvolvement: PT Class Rep, Order of Omega\nFavorite Sports: Football, baseball, and basketball. Enjoy weight-lifting and running for fun\nResearch Interests: Optimization of human performance with injury risk, use of neurotechnology (brain-computer interface) in rehab",
  },
  {
    name: "Evan Lennox",
    role: "Junior, Exercise Science",
    imageUrl: EvanHeadshot,
    link: "",
    bio: "Hometown: Carbondale, IL\nInvolvement: Club soccer, Movement Exchange, Labre\nFavorite Sports: Soccer, Tennis, Basketball\nResearch Interests: Injury prevention, Optimization of performance with implementation of proper injury prevention protocols",
  },
  {
    name: "Harper Madges",
    role: "Sophomore, Physical Therapy",
    imageUrl: HarperHeadshot,
    link: "",
    bio: "Hometown: Dayton, Ohio\nInvolvement: Micah Program, Housing & Residence Life, PT Class Rep, PT Student Ambassador, PTSA VP of Mental Health, Wellness & Inclusivity\nFavorite Sports: Volleyball and Track and Field (Shot Put, Hammer & Discus)\nResearch Interests: Injury Prevention, Music/Art Therapy, and Food Allergies & Asthma",
  },
  {
    name: "Shreya Patel",
    role: "Senior, Neuroscience, Health Information Management",
    imageUrl: ShreyaHeadshot,
    link: "",
    bio: "Hometown: Carbondale, IL\nInvolvement: Nu Rho Psi Public Relations Chair, Alpha Epsilon Delta E-board, NIB Lab Member, and Intro Neuro TA\nFavorite Sports: Playing tennis and pickleball\nResearch Interests: Parkinson's disease and rehab sciences/tech",
  },
];

const alumnus = [
  {
    name: "Meena Chetty",
    role: "Alumnus",
    imageUrl: MeenaHeadshot,
    link: "",
    bio: "Hometown: Suwanee, Georgia\nInvolvement: Omkara Dance Team\nFavorite sports: Dance\nResearch Interests: Injury prevention, women's health, neuro",
  },
  {
    name: "Jemma Kim",
    role: "Alumnus",
    imageUrl: JemmaHeadshot,
    link: "",
    bio: "Hometown: Lake Zurich, IL\nInvolvement: PTSA, PT Ambassador, SLU HRC Clinic, APTA Moves Me Ambassador, Student Success Center Tutor Lead, neurodegenerative disease research\nFavorite sports: Formula 1, cross country and track and field\nResearch Interests: Injury prevention, Parkinson's Disease, Alzheimer's Disease, rehabilitation sciences",
  },
  {
    name: "Travis Turner",
    role: "Alumnus",
    imageUrl: TravisHeadshot,
    link: "",
    bio: "Hometown: Rochester, MN\nInvolvement: SLU SOM Admissions Committee\nFavorite sports: baseball, basketball, running\nResearch Interests: orthopedic surgery research, injury prevention",
  },
];

const collaborators = [
  {
    name: "Dr. Anthony Brietbach",
    department: "Athletic Training",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Flavio Esposito",
    department: "Computer Science",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Katie Stamatakis",
    department: "Epidemiology",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Katie Sniffen",
    department: "Athletic Training",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Ross Brownson",
    department: "Dissemination and Implementation Science",
    institution: "Washington University in St. Louis",
    link: "#",
  },
  {
    name: "Dr. Shelina Babul",
    department: "",
    institution: "University of British Columbia (Canada)",
    link: "#",
  },
  {
    name: "Medrine Nyambura",
    department: "Comunications",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Ted Yemm",
    department: "Peak Sport and Spine",
    institution: "St. Louis",
    link: "#",
  },
  {
    name: "Dr. Chris Sebelski",
    department: "Physical Therapy",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Timothy Howell",
    department: "Athletic Training",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Katherine Newsham",
    department: "Athletic Training",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Dawn Kennedy",
    department: "SSM Health Physical Therapy",
    institution: "Saint Louis University",
    link: "#",
  },
  {
    name: "Dr. Wassim Mourad",
    department: "Medical Doctor",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Pascal Edouard",
    department: "",
    institution: "University of St. Etienne (France)",
    link: "",
  },
];

export default function Team() {
  return (
    <div>
      <Header />
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <LeftCircularShape />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Translational Injury Prevention Lab
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <div className="mt-10 flex justify-center">
                <ArrowDownIcon className="h-6 w-6 animate-bounce" />
              </div>
            </div>
            <Image
              src={TeamImage}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              width={1200}
              height={1000}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                width={800}
                height={1000}
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="mt-20 text-xl text-center font-bold tracking-tight sm:text-4xl">
          Collaborators
        </h2>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-4 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {collaborators.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.department}
                </p>
                <p className="text-base leading-7 text-gray-600">
                  {person.institution}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="mt-20 text-xl text-center font-bold tracking-tight sm:text-4xl">
          Alumnus
        </h2>
        <ul
          role="list"
          className="mx-auto my-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {alumnus.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                width={800}
                height={1000}
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
