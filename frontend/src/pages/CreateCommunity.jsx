import React, { useState } from 'react';
import Logo1 from '../components/Logo1';

export default function CreateCommunity() {
  const [groupName, setGroupName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const isButtonEnabled = groupName.trim() !== '' && cardNumber.trim() !== '' && expiryDate.trim() !== '' && cvc.trim() !== '';

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 sm:px-6 lg:px-8  flex-col px-4 lg:flex-row ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Logo1 />
        <p className="text-left text-lg lg:text-2xl  text-gray-900 font-medium mt-3">
          Everything you need to build community and make money online
        </p>

        <ul className="text-left font-semibold lg:text-lg text-gray-900 lg:mt-10 mt-3">
          <li className="lg:pb-5 pb-2">📈 Highly engaged</li>
          <li className="lg:pb-5 pb-2">❤ Simple to setup</li>
          <li className="lg:pb-5 pb-2">🙂 Fun to use</li>
          <li className="lg:pb-5 pb-2">💰 Charge for membership</li>
        </ul>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-10 px-12 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create your community</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Free for 14 days, then $99/month. Cancel anytime. All features. Unlimited everything. No hidden fees.
        </p>
        <form className="space-y-4">
          <div className="relative mt-4">
            <div className="relative">
              <div className="flex items-center border rounded-md px-2 py-1">
                {/* Group Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm3 8a3 3 0 11-6 0 3 3 0 016 0zm1 5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v.5h8V16z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* Group Name Input */}
                <input
                  type="text"
                  placeholder="Group name"
                  className="flex-1 outline-none px-2 py-2 text-sm placeholder-gray-400"
                  value={groupName} 
                  onChange={(e) => setGroupName(e.target.value)} 
                />
              </div>
            </div>
          </div>
          <div className="border rounded-md p-4 shadow-sm w-full max-w-md">
            {/* Card Number Row */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-600 mb-1">Card Number</label>
              <div className="flex items-center border rounded-md px-2 py-1">
                {/* Card Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm13 4H3V5h14v2z" />
                </svg>

                {/* Card Number Input */}
                <input
                  type="number"
                  placeholder="Card number"
                  className="flex-1 outline-none px-2 py-2 text-sm placeholder-gray-400"
                  value={cardNumber} 
                  onChange={(e) => setCardNumber(e.target.value)} 
                />
              </div>
            </div>

            {/* Expiry Date and CVC Row */}
            <div className="flex justify-between space-x-2">
              {/* Expiry Date Field */}
              <div className="flex flex-col w-2/3">
                <label className="text-sm font-medium text-gray-600 mb-1">Expiry Date</label>
                <input
                  type="number"
                  placeholder="MM / YY"
                  className="w-full border rounded-md px-2 py-2 outline-none text-sm placeholder-gray-400"
                  value={expiryDate} 
                  onChange={(e) => setExpiryDate(e.target.value)} 
                />
              </div>

              {/* CVC Field */}
              <div className="flex flex-col w-1/3">
                <label className="text-sm font-medium text-gray-600 mb-1">CVC</label>
                <input
                  type="number"
                  placeholder="CVC"
                  className="w-full border rounded-md px-2 py-2 outline-none text-sm placeholder-gray-400"
                  value={cvc} 
                  onChange={(e) => setCvc(e.target.value)} 
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={!isButtonEnabled}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isButtonEnabled ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            START FREE TRIAL
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-500 text-center">
          Your first charge will be on December 5th, 2024 for $99. Cancel anytime with 1-click. By clicking below, you accept our{' '}
          <a href="#" className="text-indigo-600 underline">
            terms
          </a>.
        </p>
      </div>
    </div>
  );
};
