import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import Logo from "../components/Logo1";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Signup attempted with:", email, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center items-center py-12 sm:px-6 lg:px-8  flex-col px-4 lg:flex-row">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Logo />

        <p className="text-left text-lg lg:text-2xl  text-gray-900 font-medium mt-3">
          Everything you need to build community and make moneyonline
        </p>

        <ul className="text-left font-semibold lg:text-lg text-gray-900 lg:mt-10 mt-3">
          <li className="lg:pb-5 pb-2">📈 Highly engaged</li>
          <li className="lg:pb-5 pb-2">❤ Simple to setup</li>
          <li className="lg:pb-5 pb-2">🙂 Fun to use</li>
          <li className="lg:pb-5 pb-2">💰 Charge for membership</li>
        </ul>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 lg:rounded-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h5 className="text-xl font-bold mb-5 text-gray-900 text-center">
              Create your Skool account
            </h5>
          </div>
          <Form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="FName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="FName"
                  name="FName"
                  type="text"
                  autoComplete="FName"
                  required
                  value={FName}
                  onChange={(e) => setFName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="LName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="LName"
                  name="LName"
                  type="text"
                  autoComplete="LName"
                  required
                  value={LName}
                  onChange={(e) => setLName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                SIGN UP
              </button>
            </div>
          </Form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
