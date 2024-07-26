import React, { useState } from 'react'
import { Search } from './Search'

export const FilterTab = ({handleDateFilter , handleTypeFilter}) => {
    const [DateToggleBtn,setDateToggleBtn] = useState(true)
    const [typeToggleBtn,setTypeToggleBtn] = useState(true)


  return (
    <div className='relative'>
      <div className='flex gap-2 sm:flex-row flex-col items-center  sm:justify-between sm:mr-4'>
        <div className='flex flex-col gap-2 sm:flex-row sm:gap-4 sm:ml-7 sm:my-5 relative'>
          <div className='relative'>
            <button
              onClick={() => setDateToggleBtn(prev => !prev)}
              className='inline-flex justify-center items-center text-white bg-[#1b3252] font-medium rounded-lg text-sm px-3 py-1.5 min-w-[440px] sm:min-w-28'
              type='button'
            >
              Filter By Date
              <svg
                className={`w-2.5 h-2.5 ml-1 transition-transform duration-300 transform ${
                  !DateToggleBtn ? 'rotate-180' : ''
                }`}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
              </svg>
            </button>

            <div
              className={`absolute top-full left-6 z-20 bg-[#1b3252] rounded-lg shadow ${DateToggleBtn ? 'hidden' : ''} sm:min-w-20 min-w-96`}
            >
              <ul className='py-1 text-sm text-white'>
                <li>
                  <button
                    onClick={() => {
                      handleDateFilter('2023');
                      setDateToggleBtn(prev => !prev);
                    }}
                    className='block px-4 py-2 hover:bg-[#2d4d7a] w-full'
                  >
                    2023
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleDateFilter('2024');
                      setDateToggleBtn(prev => !prev);
                    }}
                    className='block px-4 py-2 hover:bg-[#2d4d7a] w-full'
                  >
                    2024
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleDateFilter('All');
                      setDateToggleBtn(prev => !prev);
                    }}
                    className='block px-4 py-2 hover:bg-[#2d4d7a] w-full'
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className='relative'>
            <button
              onClick={() => setTypeToggleBtn(prev => !prev)}
              className='inline-flex justify-center items-center text-white bg-[#1b3252] font-medium rounded-lg text-sm px-3 py-1.5 min-w-[440px] sm:min-w-28'
              type='button'
            >
              Filter By Type
              <svg
                className={`w-2.5 h-2.5 ml-1 transition-transform duration-300 transform ${
                  !typeToggleBtn ? 'rotate-180' : ''
                }`}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
              </svg>
            </button>

            <div
              className={`absolute top-full sm:left-2 left-6 z-20 bg-[#1b3252] rounded-lg shadow ${typeToggleBtn ? 'hidden' : ''} min-w-96 sm:min-w-0`}
            >
              <ul className='py-1 text-sm text-white'>
                <li>
                  <button
                    onClick={() => {
                      handleTypeFilter('Signature');
                      setTypeToggleBtn(prev => !prev);
                    }}
                    className='block px-4 py-2 hover:bg-[#2d4d7a] w-full'
                  >
                    Signature
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleTypeFilter('Standalone');
                      setTypeToggleBtn(prev => !prev);
                    }}
                    className='block px-4 py-2 hover:bg-[#2d4d7a] w-full'
                  >
                    Standalone
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <Search />
      </div>
    </div>
  )
}
