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
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import medSchoolData, {
  classCategories,
  type MedSchool,
} from '../data/classdata'
import Card from './Card'

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
          What Medical Schools are you interested in?{' '}
        </Label>
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
          <h1 className="block pb-5 pt-12 text-5xl font-bold text-gray-900">
            Required Courses
          </h1>
          {Object.keys(classCategories).map((cat: string) => {
            return (
              <div key={cat} className="border-1 m-2 rounded-md p-4">
                <div className="text-3xl font-bold uppercase text-gray-900">
                  {cat}
                </div>{' '}
                <div className="grid">
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
                                      <div key={note.schoolName}>
                                        <span className="font-semibold">
                                          {note.schoolName + ':'}
                                        </span>
                                        <span>{note.notes}</span>
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
        </div>
      )}
    </div>
  )
}

export function Pill({ title }: { title: string }) {
  return (
    <span className="m-1 inline-flex items-center gap-x-0.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-gray-600">
      {title}
    </span>
  )
}
