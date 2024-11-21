import React, { useState } from 'react';
import Logo1 from '../components/Logo1'

export default function CreateCommunity() {
  const [groupName, setGroupName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const isButtonEnabled = groupName.trim() !== '' && cardNumber.trim() !== '';

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 sm:px-6 lg:px-8  flex-col px-4 lg:flex-row ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Logo1></Logo1>
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
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-10 px-12 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create your community</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Free for 14 days, then $99/month. Cancel anytime. All features. Unlimited everything. No hidden fees.
        </p>
        <form className="space-y-4">
          {/* <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
              Group name
            </label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="You can change this later"
            />
          </div> */}
          <div className="relative mt-4">
            <div className="relative">
              <input
                type="text"
                id="groupName"
                value={groupName}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-gray-300 peer"
                placeholder=" "
              />
              <label
                htmlFor="groupName"
                className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 transform 
            ${groupName || isFocused ? '-top-2.5 text-sm bg-white' : 'top-2 text-base bg-transparent'}
            peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white`}
              >
                Group name
              </label>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>You can change this later</span>
              <span>{`${groupName.length} / 30`}</span>
            </div>
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Autofill link"
            />
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

