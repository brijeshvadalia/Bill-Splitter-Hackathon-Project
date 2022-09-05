import { Popover } from "@headlessui/react";
import Button from "./Button";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header>
        <Popover className="relative bg-gray-100">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1 text-blue-800 text-2xl font-bold">
            <h1>Bill Splitter</h1>
            </div>

            <div className="hidden md:flex md:justify-center md:w-auto space-x-10">
              <a
                href="#features"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About Us
              </a>
            </div>
            <div className="flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="/signin">
                <Button type="link" margin="mr-4">
                  Sign in
                </Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </Popover>
      </header>
    </>
  );
};

export default Header;
