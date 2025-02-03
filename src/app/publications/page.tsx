import Header from "@/components/header";
import GridLines from "@/components/shapes/grid-lines";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";
import Link from "next/link";

const publications = [
  {
    year: "2024",
    publications: [
      {
        description:
          "Kirsten N. Bott, PhD, Michael T. Kuczynski, PhD, Oluwatoyosi B. A. Owoeye, PhD, PT, Jacob L. Jaremko, MD, PhD, Koren E. Roach, PhD, Jean-Michel Galarneau, PhD, Carolyn A. Emery, PhD, PT, and Sarah L. Manske, PhD. Subchondral Bone Degeneration and Pathology 3-15 Years Following Ankle Sprain Injury in Adolescent Sport",
        link: "https://journals.sagepub.com/doi/full/10.1177/10711007241288857",
      },
      {
        description:
          "Pascal Edouard, Davie Mulenga, Pierre-Eddy Dandrieux, Florence Salati, Jessica Wallace, Oluwatoyosi Owoeye. Coverage from medical teams and injury/illness epidemiology within youth athletics in Africa: A prospective study during the 2023 African Youth Under 18/20 Athletics Championships",
        link: "https://www.sciencedirect.com/science/article/pii/S144024402400255X",
      },
      {
        description:
          "Owoeye OBA, Mulenga D, Kim J, Breitbach A, Neme J. Normative Hamstrings and Quadriceps Isometric Strength Values in Healthy Soccer and Basketball Student-Athlete. International Journal of Exercise Science. 17 (4), 768 - 778",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:nb7KW1ujOQ8C",
      },
      {
        description:
          "Lutz D, van den Berg C, Räisänen AM, Shill I, Kim J, Vaandering K, Hayden A, Pasanen K, Schneider JK, Emery CA, Owoeye OBA. Best Practices for the Implementation of Neuromuscular Training Exercise Programs in Youth Sport: A Systematic Review. Br J Sports Med. 28;58(11):615-625. doi: 10.1136/bjsports-2023-106906",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:1sJd4Hv_s6UC",
      },
    ],
  },
  {
    year: "2023",
    publications: [
      {
        description:
          "Owoeye OBA, Paz Juan, Emery Carolyn. Injury Severity at the Time of Sport-Related Ankle Sprain is Associated with Symptoms and Quality of Life in Young Adults After 3-15 Years. Annals of Medicine. 2023;55(2):2292777. doi: 10.1080/07853890.2023.2292777.",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:NhqRSupF_l8C",
      },
      {
        description:
          "Räisänen AM, Galarneau JM, van den Berg C, Benson LC, Owoeye OB, Pasanen K, Eliason P, Kati Pasanen K, Hagel B, Emery CA. Who is most likely to respond to neuromuscular training injury prevention warm-ups? A secondary analysis of data from four RCTs in youth. Journal of Orthopaedic & Sports Physical Therapy 53 (2), 94-102",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:a0OBvERweLwC",
      },
      {
        description:
          "Mkumbuzi NS, Zondi PC, Owoeye OBA, Thornton J, Kemp JL, Drezner JA. We are not all in the same boat. We are in the same storm. Some are on super-yachts. Some have just the one oar.”1 How COVID-19 further highlighted global inequity in sport. British Journal of Sports Medicine. 57 (4), 191-192",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:cFHS6HbyZ2cC",
      },
    ],
  },
  {
    year: "2022",
    publications: [
      {
        description:
          "Owoeye OBA. Moving the Needle: A Call to Action for Sports Injury and Illness Prevention Researchers to Embrace Knowledge Translation Principles. British Journal of Sports Medicine; 56(21):1208-1209",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:u_35RYKgDlwC",
      },
      {
        description:
          "Sniffen K, Noel-London K, Scheaffer M, Owoeye OBA. Is cumulative load associated with injuries in youth team sports? A systematic review. Sports Medicine - Open 8, 117 (2022).",
        link: "https://doi.org/10.1186/s40798-022-00516-w",
      },
      {
        description:
          "Räisänen AM, van den Berg C, Owoeye OBA, McKay CD, Sass S, Emery CA. Running every time, planking sometimes: Youth adherence to the components of a neuromuscular training program. Translational Journal of the ACSM: Fall 2022 - Volume 7 - Issue 4 - e000209 doi: 10.1249/TJX.0000000000000209",
        link: "https://doi.org/10.1249/TJX.0000000000000209",
      },
      {
        description:
          "Owoeye OBA, Neme J, Buchanan P, Esposito F, Breitbach A. Absence of Injury is not Absence of Pain: Prevalence of Preseason Musculoskeletal Pain and Associated Factors in Collegiate Soccer and Basketball Student-Athletes. Int. J. Environ. Res. Public Health 2022, 19(15), 9128; https://doi.org/10.3390/ijerph19159128",
        link: "https://doi.org/10.3390/ijerph19159128",
      },
      {
        description:
          "Davie M. Wallace J. Sichitondo M, Owoeye OBA. Breaking Research Barriers in Africa: Insights from Sports and Exercise Medicine and Sports Physical Therapy Research in Zambia and Call to Action. British Journal of Sports Medicine. British Journal of Sports Medicine 2022; 0:1–2. doi:10.1136/bjsports-2022-105817 [Epub ahead of print]",
        link: "https://doi.org/10.1136/bjsports-2022-105817",
      },
      {
        description:
          'Emery CA, Owoeye OBA, Räisänen AM, Befus K, Palacios-Derflingher L, HubkaRao T, Pasanen K. The "SHRed Injuries Basketball" Neuromuscular Training Warm-up Program Reduces Ankle and Knee Injury Rates by 36% in Youth Basketball. Journal of Orthopaedic and Sports Physical Therapy, 2022; 52(1):40-48. doi: 10.2519/jospt.2022.10959',
        link: "https://doi.org/10.2519/jospt.2022.10959",
      },
      {
        description:
          "Owoeye OBA, Whittaker JL, Toomey CM, Räisänen AM, Jaremko JL, Carlesso LC, Manske SL, Emery CA. Health-Related Outcomes 3-15 Years Following Ankle Sprain Injury in Youth Sport: What Does the Future Hold? Foot and Ankle International, 2022; 43(1):21-31. doi: 10.1177/10711007211033543",
        link: "https://doi.org/10.1177/10711007211033543",
      },
      {
        description:
          "Hannington M, Tyler T, Cook J, Docking S, Owoeye OBA, Emery CA, Pasanen L, Bonello C, Vicendese DV, Edwards S, Rio E. Location of anterior knee pain affects load tolerance in isometric single leg knee extension. Journal of Science in Medicine and Sport, 2022. https://doi.org/10.1016/j.jsams.2022.03.010 [Epub ahead of print]",
        link: "https://doi.org/10.1016/j.jsams.2022.03.010",
      },
    ],
  },
  {
    year: "2021",
    publications: [
      {
        description:
          "Owoeye OBA, Palacios-Derflingher L, HubkaRao T, Wiley JP, Pasanen K, Emery CA. Burden and Risk Factors of Patellar and Achilles Tendinopathy in Youth Basketball: A Cohort Study. International Journal of Environmental Research and Public Health, 2021;18(18):9480. doi: 10.3390/ijerph18189480.",
        link: "https://doi.org/10.3390/ijerph18189480",
      },
      {
        description:
          "Kimberley Befus K, McDonough MH, Räisänen AM, Owoeye OBA, Kati Pasanen K, Emery CA. Player adherence to SHRed Injuries Basketball neuromuscular training warm-up program: Can exercise fidelity be objectively measured? Translational Journal of Sports Medicine, https://doi.org/10.1002/tsm2.285 [Epub ahead of print]",
        link: "https://doi.org/10.1002/tsm2.285",
      },
      {
        description:
          "Smith MD, Vicenzino B, Bahr R, Bandholm T, Cooke R, De Michelis Mendonça L, Fourchet F, Glasgow P, Gribble P, Herrington L, Hiller C, Lee SY, Macaluso A, Meeusen R, Owoeye OBA, Reid D, Tassignon B, Terada M, Thorborg K, Verhagen E, Verscheuren J, Wang D, Whiteley R, Wikstrom E, Delahunt E. Return to sport decisions after an acute lateral ankle sprain injury: introducing the PAASS framework—an international multidisciplinary consensus. British Journal of Sports Medicine, 2021;55:1270–1276; http://dx.doi.org/10.1136/bjsports-2021-104087",
        link: "http://dx.doi.org/10.1136/bjsports-2021-104087",
      },
      {
        description:
          "Hannington M, Tyler T, Docking S, Cook J, Owoeye OBA, Bonello C, Emery CA, Pasanen L, Edwards S, Rio E. Prevalence and pain distribution of anterior knee pain in college basketball players. Journal of Athletic Training (2021) https://doi.org/10.4085/1062-6050-0604.20 [Epub ahead of print]",
        link: "https://doi.org/10.4085/1062-6050-0604.20",
      },
      {
        description:
          "Benson LC, Owoeye OBA, Räisänen A, Stilling C, Edwards W.B. Emery CA. Magnitude, Frequency and Accumulation: Workload Among Injured and Uninjured Youth Basketball Players. Frontiers in Sports and Active Living. Living 2021; https://doi.org/10.3389/fspor.2021.607205.",
        link: "https://doi.org/10.3389/fspor.2021.607205",
      },
      {
        description:
          "Toomey CM, Whittaker JL, Richmond SA, Owoeye OBA, Patton DA, Emery CA. Adiposity as a Risk Factor for Sport Injury in Youth: A Systematic Review. Clinical Journal of Sports Medicine 2021; DOI: 10.1097/JSM.0000000000000927 [Online ahead of print]",
        link: "https://doi.org/10.1097/JSM.0000000000000927",
      },
      {
        description:
          "Räisänen AM, Owoeye OBA, Befus K, van den Berg C, Pasanen K, PT, Emery CA. Warm-ups and coaches' perceptions: Searching for clues to improve injury prevention in youth basketball. Frontiers in Sports and Active Living 2021; https://doi.org/10.3389/fspor.2021.619291",
        link: "https://doi.org/10.3389/fspor.2021.619291",
      },
      {
        description:
          "Benson LC, Stilling C, Owoeye OBA, Emery CA. Evaluating Methods for Imputing Missing Data from Longitudinal Monitoring of Athlete Workload. Journal of Sports Science and Medicine. 5;20(2):188-196. DOI: https://doi.org/10.52082/jssm.2021.188",
        link: "https://doi.org/10.52082/jssm.2021.188",
      },
    ],
  },
  {
    year: "2020",
    publications: [
      {
        description:
          "Owoeye OBA, Rauvola RS, Brownson RC. Dissemination and Implementation Research in Sports and Exercise Medicine and Sports Physical Therapy: Translating Evidence to Practice and Policy. BMJ Open Sport & Exercise Medicine 2020; DOI: http://dx.doi.org/10.1136/bmjsem-2020-000974",
        link: "http://dx.doi.org/10.1136/bmjsem-2020-000974",
      },
      {
        description:
          "Owoeye OBA, McKay CD, Raisanen A, Hubka T, Palacios-Derflingher LM, Emery CA. Psychosocial factors and the Effects of a Structured Injury Prevention Workshop on Coaches' Self-Efficacy to Implement the 11+ Exercise Program. International Journal of Exercise Science 2020; 13 (5): 1459 - 1475.",
        link: "",
      },
      {
        description:
          "Owoeye OBA, VanderWey MJ, Pike I. Reducing Injuries in Soccer (Football): An Umbrella Review of Best Evidence Across the Epidemiological Framework for Prevention. Sports Med - Open 6, 46 (2020). https://doi.org/10.1186/s40798-020-00274-7.",
        link: "https://doi.org/10.1186/s40798-020-00274-7",
      },
      {
        description:
          "Owoeye OBA, Ghalli B, Befus K, Stilling C, Hogg A, Choi J, Palacios-Derflingher L, Pasanen K, Emery CA. Epidemiology of All-Complaint Injuries in Youth Basketball. Scand J Med Sci Sports 2020; 30 (12): 2466-2476.",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:TFP_iSt0sucC",
      },
      {
        description:
          "Owoeye OBA, Emery CA, Befus K, Palacios-Derflingher LM, Pasanen K. How much, how often, how well? Adherence to a neuromuscular training injury prevention warm-up program in youth basketball. Journal of Sports Sciences 2020; 38 (20): 2329-2337.",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:bEWYMUwI8FkC",
      },
      {
        description:
          "Ghali BM, Owoeye OBA, Stilling C, Palacios-Derflingher L, Jordan M, Pasanen K, Emery CA. Internal and External Workload in Youth Basketball Players who are Symptomatic and Asymptomatic for Patellar Tendinopathy. Journal of Orthopaedic and Sports Physical Therapy 2020; 50(7):402-408.",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fl30wJgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=fl30wJgAAAAJ:TQgYirikUcIC",
      },
    ],
  },
];

export default async function Publications() {
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
            Recent Publications
          </h1>
          <div className="space-y-12">
            {publications.map((publication, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {publication.year}
                </h3>
                {publication.publications.map((item, itemIndex) => (
                  <figure
                    key={itemIndex + index}
                    className="mt-10 border-l border-indigo-600 pl-9"
                  >
                    <blockquote className="text-base leading-7 text-gray-800">
                      <Link href={item.link} target="_blank" className="group">
                        <p className="group-hover:underline">
                          {item.description}
                        </p>
                      </Link>
                    </blockquote>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <RightCircularShape />
        </div>
      </div>
    </div>
  );
}
