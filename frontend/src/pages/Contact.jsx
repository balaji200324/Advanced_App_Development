import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container mx-auto px-6 w-full bg-slate-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
      <div className='text-center mt-6 font-bold text-3xl'> Contact us</div>
        <div className='text-center mt-3'>
          <p>Feel free to reach out! We are always open to new ideas and collaborations.</p>
        </div>
          <div className='mx-auto mt-16 max-w-xl sm:mt-20'>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder='first-name'
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-indigo-200"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder='last-name'
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-indigo-200"
                  />
                </div>
              </div>

              <div className="sm:col-2">
                <div className="mt-2.5">
                  <input
                    type="email"
                    placeholder='Email address'
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-indigo-200"
                  />
                </div>
              </div>

              <div className="sm:col-2">
                <div className="mt-2.5">
                  <input
                    type="tel"
                    placeholder='Phone number'
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-indigo-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    placeholder='Message'
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact