/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import medSchoolData from '../data/classdata'
import Card from './Card'

const schools = medSchoolData

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedSchools, setSelectedSchools] = useState([])

  const filteredSchools =
    query === ''
      ? schools
      : schools.filter((school) => {
          return school.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div>
      <Combobox
        as="div"
        multiple
        value={selectedSchools}
        onChange={(person) => {
          setQuery('')
          setSelectedSchools(person)
        }}
      >
        {/* <Label className="block text-sm/6 font-medium text-gray-900">
        Assigned to
      </Label> */}
        <div className="relative mt-2">
          <ComboboxInput
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => setQuery('')}
            displayValue={(person: any) => person?.name}
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="size-5 text-gray-400"
              aria-hidden="true"
            />
          </ComboboxButton>

          {filteredSchools.length > 0 && (
            <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredSchools.map((school, index) => (
                <ComboboxOption
                  key={index}
                  value={school}
                  className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <span className="block truncate group-data-[selected]:font-semibold">
                    {school.name}
                  </span>

                  <span className="absolute inset-y-0 left-0 hidden items-center pl-1.5 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="size-5" aria-hidden="true" />
                  </span>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </div>
      </Combobox>
      {selectedSchools.map((school: any, index) => {
        return (
          <span
            key={index}
            className="m-1 inline-flex items-center gap-x-0.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-gray-600"
          >
            {school.name}
            <button
              type="button"
              className="group relative -mr-1 size-3.5 rounded-sm hover:bg-gray-500/20"
              onClick={() => {
                setSelectedSchools((e: any) =>
                  e.filter((val: any) => val.name != school.name),
                )
              }}
            >
              <span className="sr-only">Remove</span>
              <svg
                viewBox="0 0 14 14"
                className="size-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75"
              >
                <path d="M4 4l6 6m0-6l-6 6" />
              </svg>
              <span className="absolute -inset-1" />
            </button>
          </span>
        )
      })}
      <div className="mt-5">
        {schools.map((school, index) => {
          return (
            <div key={index} className="grid grid-flow-row-dense grid-cols-2">
              <div className="p-2">
                <Card
                  title={school.requiredClasses[0].name}
                  description={'This class is required'}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
