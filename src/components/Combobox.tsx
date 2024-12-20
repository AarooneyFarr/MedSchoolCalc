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
  Label,
} from '@headlessui/react'
import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import medSchoolData, {
  classCategories,
  type MedSchool,
} from '../data/classdata'
import Card from './Card'
import { Button } from './button'

const schools = medSchoolData

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedSchools, setSelectedSchools] = useState<MedSchool[]>([])

  const filteredSchools =
    query === ''
      ? schools
      : schools.filter((school) => {
          return school.name.toLowerCase().includes(query.toLowerCase())
        })

  const requiredClassSet = new Set<string>()
  const requiredClassMap = new Map<string, Set<string>>()
  selectedSchools.forEach((school) => {
    school.requiredClasses.forEach((c) => {
      requiredClassSet.add(c.name)
      if (requiredClassMap.has(c.name)) {
        const currentSet = requiredClassMap.get(c.name)!
        currentSet.add(school.name)
        requiredClassMap.set(c.name, currentSet)
      } else {
        const set = new Set<string>()
        set.add(school.name)
        requiredClassMap.set(c.name, set)
      }
    })
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
        <Label className="block text-xl font-bold text-gray-900">
          Select the Medical Schools that you are interested in?{' '}
        </Label>
        <div className="relative mt-2">
          <ComboboxInput
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#14B077] sm:text-sm/6"
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
                  className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-[#14B077] data-[focus]:text-white data-[focus]:outline-none"
                >
                  <span className="block truncate group-data-[selected]:font-semibold">
                    {school.name}
                  </span>

                  <span className="absolute inset-y-0 left-0 hidden items-center pl-1.5 text-[#14B077] group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="size-5" aria-hidden="true" />
                  </span>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </div>
      </Combobox>
      {selectedSchools.length > 0 && (
        <div>
          <h1 className="block pt-5 text-xl font-bold text-gray-900">
            Selected Schools
          </h1>
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
          <div className="flex items-center justify-between">
            <h1 className="block pb-10 pt-12 text-5xl font-bold text-gray-900">
              Required Courses
            </h1>
            <div>
              <Button>
                <EnvelopeIcon className="size-6 pr-2" />
                Send me my course summary
              </Button>
            </div>
          </div>
          {Object.keys(classCategories).map((cat: string) => {
            return (
              <div key={cat} className="border-1 m-2 rounded-md p-4">
                <div className="text-3xl font-bold uppercase tracking-wide text-gray-900">
                  {cat}
                </div>{' '}
                <div className="grid grid-cols-2">
                  {Array.from(requiredClassSet).map((className, index) => {
                    const schoolSet = requiredClassMap.get(className)!
                    const schoolsThatRequire: string[] = []
                    const schoolsThatRec: string[] = []
                    const notesArray: { schoolName: string; notes: string }[] =
                      []
                    const schoolClassArray = []

                    Array.from(schoolSet).forEach((schoolName) => {
                      const school = selectedSchools.find(
                        (school) => school.name == schoolName,
                      )!

                      const c = school.requiredClasses.find(
                        (c) => c.name == className,
                      )
                      if (c?.required == 'yes') {
                        schoolsThatRequire.push(school.name)
                      }
                      if (c?.required == 'recommended') {
                        schoolsThatRec.push(school.name)
                      }
                      if (c) {
                        schoolClassArray.push(c)
                        if (c.notes) {
                          notesArray.push({
                            schoolName: schoolName,
                            notes: c.notes,
                          })
                        }
                      }
                    })

                    if (
                      schoolsThatRequire.length == 0 &&
                      schoolsThatRec.length == 0
                    )
                      return null
                    if (
                      !classCategories[cat].find(
                        (classTitle) => className == classTitle,
                      )
                    )
                      return null

                    return (
                      <div key={index} className="">
                        <div className="p-2">
                          <Card
                            title={className}
                            rec={schoolsThatRec}
                            req={schoolsThatRequire}
                            description={
                              <div>
                                <h2 className="text-lg font-bold">Notes:</h2>
                                <div>
                                  {notesArray.map((note) => {
                                    return (
                                      <div
                                        className="pl-2"
                                        key={note.schoolName}
                                      >
                                        <span className="font-semibold">
                                          {note.schoolName + ': '}
                                        </span>
                                        <span className="font-light">
                                          {note.notes}
                                        </span>
                                      </div>
                                    )
                                  })}
                                </div>
                                {/* <h2 className="text-lg font-bold">Required by:</h2>
                            {schoolsThatRequire.map((school) => {
                              return <Pill key={school} title={school} />
                            })} */}
                              </div>
                            }
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
          <Leland names={selectedSchools.map((school) => school.name)} />
          <Tooltip id="my-tooltip" />
        </div>
      )}
    </div>
  )
}

export function Pill({
  title,
  color,
  tooltip,
}: {
  title: string
  color: 'green' | 'yellow'
  tooltip: string
}) {
  return (
    <span
      title={tooltip}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={tooltip}
      data-tooltip-place="top"
      className={clsx(
        'm-1 inline-flex cursor-default items-center gap-x-0.5 rounded-md px-2 py-1 text-xs font-medium text-gray-600',
        color == 'green' ? 'bg-green-200' : 'bg-yellow-200',
      )}
    >
      {title}
    </span>
  )
}

function Leland({ names }: { names: string[] }) {
  return (
    <div>
      {/* Building a call to action at the bottom of the app to drive traffic to schedule appointments */}
      <div className="px-4 text-center">
        {/* Main Heading */}
        <p className="pt-7 text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
          Let us help you plan your path to medical school
        </p>

        {/* Subheading */}
        <p className="pt-7 text-sm font-semibold text-gray-900">
          Meet with one of our many professionals that graduated from one of
          these schools.
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-9 pt-4">
          {/* Cards Section */}
          {names.map((name) => {
            return (
              <div
                key={name}
                className="w-40 rounded-lg border-2 p-4 text-center shadow-lg"
              >
                <img
                  alt="face"
                  src="/team/prof_woman1.png"
                  className="mx-auto h-32 w-32 rounded-full"
                />
                <p className="mt-4 text-sm font-semibold">Leland coach</p>
                <p className="mt-4 text-sm font-semibold">
                  <span className="font-normal">{'Coach from: '}</span>
                  {name}
                </p>
              </div>
            )
          })}
          {/* <img src="/team/pros.png" className="mx-auto w-3/4" /> */}
          {/* Card 2
          <div className="border-2 rounded-lg shadow-lg p-4 text-center w-40">
            <img
              src="/team/prof-man1.png"
              className="h-32 w-32 rounded-full mx-auto"
            />
            <p className="mt-4 text-sm font-semibold">Harvard</p>
          </div>
          <div className="border-2 rounded-lg shadow-lg p-4 text-center w-40">
            <img
              src="/team/prof_woman2.png"
              className="h-32 w-32 rounded-full mx-auto"
            />
            <p className="mt-4 text-sm font-semibold">Harvard</p>
          </div>
          <div className="border-2 rounded-lg shadow-lg p-4 text-center w-40">
            <img
              src="/team/prof-man2.png"
              className="h-32 w-32 rounded-full mx-auto"
            />
            <p className="mt-4 text-sm font-semibold">Harvard</p>
          </div> */}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12">
          <Button
            href="/schedule"
            className="bg-[#14B077] px-4 py-2 text-white shadow-lg"
          >
            Schedule a free 15 minute intro call
          </Button>
        </div>
      </div>
    </div>
  )
}
