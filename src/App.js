import React, { useState } from 'react';
import { getInvoicesPaid, getInvoicesExtra } from './api';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSource, setCurrentSource] = useState('');
  const [data, setData] = useState([]);

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setCurrentSource(newValue);
    if (newValue) {
      setIsLoading(true);
      setTimeout(() => callApi(newValue), 500);
    } else {
      setData([])
    }
  }

  const callApi = (source) => {
    setCurrentSource(source);
    const queryFunc = source === '1' ? getInvoicesPaid : getInvoicesExtra;
    queryFunc().then(res => {
      setData(res.data);
      setIsLoading(false);
    });
  }

  return (
    <div className="App">
      <div className="mt-10 sm:mt-0 p-5">
        <div className="container mx-auto my-4 max-w-xs">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Data Source To Select</label>
          <select id="country" value={currentSource} name="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleSelectChange}>
            <option value="" disabled selected>Please select invoices source</option>
            <option value="1">Invoices Paid</option>
            <option value="2">Invoices Extra</option>
          </select>
        </div>
        {isLoading && (
          <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        )}
        {!isLoading && (
          <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div
                className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
              >
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Client / Invoice
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Issued / Due
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      const colorClass = item.status === 'Paid' ? 'text-green-700' : 'text-red-700';
                      const bgClass = item.status === 'Paid' ? 'bg-green-200' : 'bg-red-200';
                      return (
                        <tr key={index}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={item.avatar}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {item.name}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">{item.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.amount}</p>
                            <p className="text-gray-600 whitespace-no-wrap">{item.currency}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.issued_date}</p>
                            <p className="text-gray-600 whitespace-no-wrap">{item.due_date}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                              className={`relative inline-block px-3 py-1 font-semibold ${colorClass} leading-tight`}
                            >
                              <span
                                aria-hidden
                                className={`absolute inset-0 ${bgClass} opacity-50 rounded-full`}
                              ></span>
                              <span className="relative">{item.status}</span>
                            </span>
                          </td>
                        </tr>
                      )}
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
