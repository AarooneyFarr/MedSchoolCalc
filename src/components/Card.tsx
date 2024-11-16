import { useState } from 'react'

export default function Card({
  title,
  description,
}: {
  title: React.ReactNode
  description: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-100 shadow">
      <div className="px-4 py-5 font-bold text-gray-900 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        {title}
      </div>
      {open && <div className="px-4 py-5 sm:p-6">{description}</div>}
    </div>
  )
}
