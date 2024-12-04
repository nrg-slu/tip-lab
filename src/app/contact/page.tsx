import Header from "@/components/header";
import LeftCircularShape from "@/components/shapes/left-circular-shape";
import RightCircularShape from "@/components/shapes/right-circular-shape";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <LeftCircularShape />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <h1 className="text-4xl pb-12 text-center font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-3.5 py-2.5 rounded-md ring-1 ring-gray-300 ring-inset shadow-sm focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3.5 py-2.5 rounded-md ring-1 ring-gray-300 ring-inset shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full px-3.5 py-2.5 rounded-md ring-1 ring-gray-300 ring-inset shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-3.5 py-2.5 rounded-md ring-1 ring-gray-300 ring-inset shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>

          <div className="mt-16 space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Visit Us
              </h2>
              <p className="mt-4 text-gray-600">
                Translational Sports Injury Prevention Lab
                <br />
                Saint Louis University
                <br />
                3437 Caroline Street
                <br />
                St. Louis, MO 63104
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Email Us
              </h2>
              <p className="mt-4 text-gray-600">tiplab@slu.edu</p>
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
