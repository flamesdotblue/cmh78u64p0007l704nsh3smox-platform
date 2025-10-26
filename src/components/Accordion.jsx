import { useState } from 'react'

export default function Accordion({ items = [] }) {
  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} defaultOpen={idx === 0} />
      ))}
    </div>
  )
}

function AccordionItem({ title, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between"
      >
        <span className="font-medium text-slate-900">{title}</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <div className={`${open ? 'block' : 'hidden'} px-5 pb-5 text-slate-700`}>{content}</div>
    </div>
  )
}
