import { ChevronUpIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { Pill } from './Combobox'

export default function Card({
  title,
  req,
  rec,
  description,
}: {
  title: string
  req: string[]
  rec: string[]
  description: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center overflow-hidden rounded-lg bg-gray-100 shadow">
      <button onClick={() => setOpen(!open)}>
        <ChevronUpIcon className="size-12 fill-slate-900 px-2" />
      </button>
      <div className="w-full divide-y divide-gray-200">
        <div className="justify-between px-4 py-5">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <div className="text-lg font-bold text-gray-900">{title}</div>
          {!open && (
            <div className="ml-auto pl-2">
              {
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <h2 className="text-md">Required:</h2>
                    {req.map((school) => {
                      return <Pill key={school} title={school} />
                    })}
                  </div>
                  <div className="flex flex-row">
                    {' '}
                    <h2 className="text-md">Recommended:</h2>
                    {rec.map((school) => {
                      return <Pill key={school} title={school} />
                    })}
                  </div>
                </div>
              }
            </div>
          )}
        </div>
        {open && <div className="px-4 py-5 sm:p-6">{description}</div>}
        {open && (
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h2 className="text-md font-semibold">Required:</h2>
                {req.map((school) => {
                  return <Pill key={school} title={school} />
                })}
              </div>
              <div className="flex flex-row">
                {' '}
                <h2 className="text-md font-semibold">Recommended:</h2>
                {rec.map((school) => {
                  return <Pill key={school} title={school} />
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
