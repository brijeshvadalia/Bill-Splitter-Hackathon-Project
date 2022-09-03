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
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative sm:overflow-hidden">
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-gray-800">
                  Split expenses with your buddies.
                  </span>
                  <span className="block text-blue-600">
                      
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-500 sm:max-w-3xl">
                Split bills with your friends quickly and effortlessly. Register
                  today with your friends
                </p>
                <div className="sm:max-w-10 mx-auto mt-10 max-w-sm sm:flex sm:justify-center">
                  <Link to="/signup" className="w-full">
                    <Button width="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden pt-16 pb-32">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <PieChart className="h-12 w-12" />
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Stay on top of your bills
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    There is no need to recall the costs. Use{" "}
                      <span className="font-bold">Split Bill</span> can record your expenses, share them with your friends, and keep track of your bills.
                    </p>
                    <div className="mt-6">
                      <Link to="/signup">
                        <Button margin="m-0">Get Started</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={GroupImg}
                    alt="dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div>
                    <CircleGroup />
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Create Groups for easy management
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Would you like to split your expenditures with some friends? No problem, establish groups, and distribute it quickly.
                    </p>
                    <div className="mt-6">
                    <Link to="/signup" className="w-full">
                    <Button width="w-full">Get Started</Button>
                  </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={GroupImg}
                    alt="dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-700">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Our Features
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-200">
            SplitBill has many functions. Discover what you are missing by exploring the features listed below.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Follow Me
              </h3>
              <div className="mt-6 flex w-fit items-center justify-between">
                <div>
                  <a
                    href="https://github.com/brijeshvadalia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mr-4 h-10 w-10 text-gray-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  href="https://brijeshvadaliya8128.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={HashNodeLogo} alt="hashnode" className="h-10" />
                </a>
              </div>
            </div>
       
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
              Made with love by Brijesh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
