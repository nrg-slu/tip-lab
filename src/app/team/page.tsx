import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import AarushiHeadshot from "../../../public/images/headshots/aarushi.jpg";
import DavieHeadshot from "../../../public/images/headshots/davie.jpg";
import EvanHeadshot from "../../../public/images/headshots/evan.png";
import HarperHeadshot from "../../../public/images/headshots/harper.png";
import JackHeadshot from "../../../public/images/headshots/jack.png";
import JaredHeadshot from "../../../public/images/headshots/jared.jpg";
import JemmaHeadshot from "../../../public/images/headshots/jemma.png";
import JosephHeadshot from "../../../public/images/headshots/joseph.jpg";
import JustinHeadshot from "../../../public/images/headshots/justin.png";
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
import Callahan from "../../../public/images/callahan.jpg";
import Peak from "../../../public/images/peak.jpg";
import FairwayAutomotive from "../../../public/images/fairway-automotive.png";
import PlayOnPickle from "../../../public/images/play-on-pickle.png";
import SsmHealthOrthopedics from "../../../public/images/ssm-health-orthopedics.jpg";
import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import TeamImage from "../../../public/images/team-image-2.jpg";
import React from "react";

const people = [
  {
    name: "Olu Owoeye, Ph.D.",
    role: "Director of the Translational Injury Prevention Lab and Associate Professor at the Department of Physical Therapy and Athletic Training, Saint Louis University",
    imageUrl: OluHeadshot,
    link: "",
    bio: "Dr. Owoeye's research focuses on the generation and implementation of knowledge that informs the prevention of sport- and exercise-related injuries and consequences in youth and young adults.",
  },
  {
    name: "Davie Mulenga",
    role: "2nd year PhD student",
    imageUrl: DavieHeadshot,
    link: "",
    bio: "Hometown: Zambia\nFavorite Sport: Soccer\nResearch Interests: Sports epidemiology, cancer rehabilitation, implementation science\nFun Fact: A life in motion",
  },
  {
    name: "Aarushi Parmar",
    role: "Professional Year 3, Physical Therapy",
    imageUrl: AarushiHeadshot,
    link: "",
    bio: "Hometown: Michigan\nFavorite Sports: Football (to watch), Basketball (to play)\nResearch Interests: Injury Prevention\nFun Fact: I love playing the piano and going on drives",
  },
  {
    name: "Joseph Grese",
    role: "Professional Year 3, Physical Therapy",
    imageUrl: JosephHeadshot,
    link: "",
    bio: "Hometown: Indianapolis, Indiana\nFavorite Sports: Baseball (to watch), Swimming (to play)\nResearch Interests: Injury prevention and return to sport\nFun Fact: I am a big Cardinals fan",
  },
  {
    name: "Mitchell Wayne",
    role: "Professional Year 2, Physical Therapy",
    imageUrl: MitchellHeadshot,
    link: "",
    bio: "Hometown: Lake Zurich, Illinois\nFavorite Sports: Football and Baseball (to watch), Baseball, Pickleball, and Strength Training (to play)\nResearch Interests: Pickleball Injury Prevention and Physical Therapy Rehabilitation Outcomes\nFun Fact: I have traveled to 4 continents",
  },
  {
    name: "Jared Thornberry",
    role: "Professional Year 1, Physical Therapy",
    imageUrl: JaredHeadshot,
    link: "",
    bio: "Hometown: Saint Louis, Missouri\nFavorite Sport: Soccer\nResearch Interests: Musculoskeletal injury prevention, concussion prevention\nFun Fact: I have studied at all three Saint Louis University campuses (SLUH High, SLU-Saint Louis, SLU-Madrid)",
  },
  {
    name: "Justin Samanta",
    role: "M2, Medicine",
    imageUrl: JustinHeadshot,
    link: "",
    bio: "Hometown: Cape Girardeau, MO\nFavorite Sport: Basketball\nResearch Interests: Rehabilitation, Neuroscience, Injury Prevention\nFun Fact: I have a private pilot license",
  },
  {
    name: "Harper Madges",
    role: "Junior, Physical Therapy",
    imageUrl: HarperHeadshot,
    link: "",
    bio: "Hometown: Kettering, Ohio\nFavorite Sport: Volleyball\nResearch Interests: Injury prevention, food allergies & asthma, art/music therapy\nFun Fact: I haven't ever broken a bone but I've had way too many concussions!",
  },
  {
    name: "Evan Lennox",
    role: "Junior, Exercise Science",
    imageUrl: EvanHeadshot,
    link: "",
    bio: "Hometown: Carbondale, IL\nInvolvement: Club soccer, Movement Exchange, Labre\nFavorite Sports: Soccer, Tennis, Basketball\nResearch Interests: Injury prevention, Optimization of performance with implementation of proper injury prevention protocols",
  },
];

const alumni = [
  {
    name: "Nick Kolesky",
    role: "4th year PhD student",
    imageUrl: NickHeadshot,
    link: "",
    bio: "Hometown: Anchorage, AK\nInvolvement: Public health research\nFavorite sports: soccer, cross country\nResearch Interests: socioeconomic factors underlying obesity, injury prevention",
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
    name: "Shreya Patel",
    role: "Senior, Neuroscience, Health Information Management",
    imageUrl: ShreyaHeadshot,
    link: "",
    bio: "Hometown: Carbondale, IL\nInvolvement: Nu Rho Psi Public Relations Chair, Alpha Epsilon Delta E-board, NIB Lab Member, and Intro Neuro TA\nFavorite Sports: Playing tennis and pickleball\nResearch Interests: Parkinson's disease and rehab sciences/tech",
  },
  {
    name: "Meena Chetty",
    role: "Alumni",
    imageUrl: MeenaHeadshot,
    link: "",
    bio: "Hometown: Suwanee, Georgia\nInvolvement: Omkara Dance Team\nFavorite sports: Dance\nResearch Interests: Injury prevention, women's health, neuro",
  },
  {
    name: "Jemma Kim",
    role: "Alumni",
    imageUrl: JemmaHeadshot,
    link: "",
    bio: "Hometown: Lake Zurich, IL\nInvolvement: PTSA, PT Ambassador, SLU HRC Clinic, APTA Moves Me Ambassador, Student Success Center Tutor Lead, neurodegenerative disease research\nFavorite sports: Formula 1, cross country and track and field\nResearch Interests: Injury prevention, Parkinson's Disease, Alzheimer's Disease, rehabilitation sciences",
  },
  {
    name: "Travis Turner",
    role: "Alumni",
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
    department: "Orthopaedic Surgery",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Pascal Edouard",
    department: "",
    institution: "University of St. Etienne (France)",
    link: "",
  },
  {
    name: "Dr. Ryan Blechle",
    department: "SSM Health Physical Therapy",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Jamil Neme",
    department: "Sports Medicine",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Eric Bellm",
    department: "Physical Therapy",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Ryan Blechle",
    department: "SSM Health Physical Therapy",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Katherine Newsham",
    department: "Athletic Training",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Madeline Stenersen",
    department: "Psychology",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Jazmon Carroll",
    department: "SSM Health Physical Therapy",
    institution: "Saint Louis University",
    link: "",
  },
  {
    name: "Dr. Alex Baran",
    department: "SSM Health Physical Therapy",
    institution: "Saint Louis University",
    link: "",
  },
];

const partners = [
  {
    name: "Callahan Pickleball Academy",
    link: "https://callahanpickleball.com/",
    image: Callahan,
  },
  {
    name: "Peak Sport and Spine",
    link: "https://peaksportspine.com/locations/crestwood/?utm_source=GBP",
    image: Peak,
  },
  {
    name: "SSM Health Orthopedics - Sports Medicine",
    link: "https://www.ssmhealth.com/services/orthopedics/sports-medicine",
    image: SsmHealthOrthopedics,
  },
  {
    name: "Fairway Automotive",
    link: "https://www.fairwayautomotive.com/",
    image: FairwayAutomotive,
  },
  {
    name: "Play On Pickle",
    link: "https://www.playonpickle.com/",
    image: PlayOnPickle,
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
          Alumni
        </h2>
        <ul
          role="list"
          className="mx-auto my-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {alumni.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="mt-20 text-xl text-center font-bold tracking-tight sm:text-4xl">
          Partners
        </h2>
        <ul
          role="list"
          className="mx-auto my-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {partners.map((partner) => (
            <li key={partner.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="flex-auto space-y-6">
                <Link href={partner.link} className="flex h-16 items-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="h-full w-auto max-w-[200px] object-contain"
                  />
                </Link>
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  <Link
                    href={partner.link}
                    className="underline decoration-gray-300 underline-offset-4 hover:text-indigo-600 hover:decoration-indigo-600"
                  >
                    {partner.name}{" "}
                    <ArrowTopRightOnSquareIcon className="inline h-4 w-4 align-text-top" />
                  </Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
