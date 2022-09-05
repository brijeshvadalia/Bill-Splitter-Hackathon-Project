import {
  DocumentReportIcon,
  UserGroupIcon,
  CollectionIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Header from "../components/Header";
import Button from "../components/Button";
import HashNodeLogo from "../images/hashnode.png";
import { ReactComponent as PieChart } from "../images/pie-chart.svg";
import { ReactComponent as CircleGroup } from "../images/circle-group.svg";
import { ReactComponent as Linode } from "../images/Linode.svg";
import DashboardImg from "../images/dashboard.png";
import GroupImg from "../images/group.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const features = [
  {
    name: "Group Expenses",
    description: "Share your expenses among group of friends with ease.",
    icon: UserGroupIcon,
  },
  {
    name: "Manage Expenses",
    description:
      "Keep track of your expenses. Manage whom you owe and also who owes you.",
    icon: CollectionIcon,
  },
  {
    name: "Share it Individually",
    description: "Share the bill with your friends individually.",
    icon: UserIcon,
  },

  {
    name: "Expense Reporting",
    description: "Track all your expenses with our reporting service.",
    icon: DocumentReportIcon,
  },
];

export default function LandingPage() {
  useEffect(() => {
    document.title = "Bill Splitter | Brijesh ";
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main>
       
     
      
        <div className="mb-16">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-bold tracking-wider text-blue-400 uppercase rounded-full bg-teal-accent-400">
                About Us
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-800 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Use</span>
              </span>{' '}
              Bill  Spliter for splitting expenses with your buddies.
            </h2>
            <p className="text-base text-gray-700 md:text-lg ">
            Split billing is the division of a bill for service into two or more parts. Bills may be split to divide work between clients, payers or for reimbursement to different service providers for performing a shared service.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
          <div className="mt-6">
                    <Link to="/signup" className="w-full">
                    <Button width="w-full">Get Started</Button>
                  </Link>
                    </div>
                    <div className="mt-6 ml-4">
                  
                    <Button width="w-full">Learn More</Button>
                
                    </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Make it better
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Do it faster
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Working harder
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl sm:leading-none">
            Make groups for simple management.
              <br className="hidden md:block" />
              {' '}
              <span className="inline-block text-deep-purple-accent-400">
           
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
            There is no need to recall the costs.Bill Splitter can record your expenses, share them with your friends, and keep track of your bills.Would you like to split your expenditures with some friends? No problem, establish groups, and distribute it quickly.
            </p>
            <div className="mt-6">
                    <Link to="/signup" className="w-full">
                    <Button width="w-full">Get Started</Button>
                  </Link>
                    </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-2xl font-bold tracking-tight text-blue-800 sm:text-3xl sm:leading-none md:text-center">
            Register with your friends today.
            <br className="hidden md:block" />
       
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
          Splitting Bills: All You Need To Know As Diners Go The Dutch Way. “Let's go Dutch” or “Dutch the bill,” is a phrase that has become extremely common in terms of usage and popularity among the masses lately. The term indicates that each person in the group while dining out pays for their share.
          </p>
       <div className="mt-6">
                    <Link to="/signup" className="w-full">
                    <Button width="w-full">Get Started</Button>
                  </Link>
                    </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 mt-2 text-sm text-gray-600 md:mb-2">Follow us</div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                    <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
      </main>

     
    </div>
  );
}
