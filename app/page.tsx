"use client"

import React from "react"
import { motion } from "framer-motion"
import TimeMachine from "@/components/time-machine"

const SHARK_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fdafa90d-0a8a-4122-aa18-e0a8f2f13104-gFJqevntM1Qy5s5fDFdJ6twuGbl8CV.png"

function SharkEntrance({ onEnter }: { onEnter: () => void }) {
  const [gaze, setGaze] = React.useState({ x: 0, y: 0 })

  function followPointer(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    setGaze({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 14,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 10,
    })
  }

  return (
    <section onPointerMove={followPointer} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0877c9] px-6 py-12">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(91,210,255,.52),transparent_34%),linear-gradient(180deg,#168bdc_0%,#07549f_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 border-b-4 border-white/40 bg-white/15 shadow-[0_12px_45px_rgba(190,245,255,.35)]" style={{ borderRadius: "0 0 50% 50%" }} />
      <div aria-hidden="true" className="absolute left-[12%] top-[20%] h-5 w-5 rounded-full bg-white/35 blur-[1px]" />
      <div aria-hidden="true" className="absolute right-[16%] top-[28%] h-8 w-8 rounded-full border-2 border-white/30" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100/90">A deep dive into internet culture</p>
        <h1 className="max-w-3xl text-balance text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_6px_0_rgba(2,39,91,.35)] sm:text-5xl md:text-7xl">Welcome to the SHARC Hall of Memes</h1>
        <div className="relative mt-1 w-full max-w-[560px]">
          <img src={SHARK_IMAGE} alt="Friendly cartoon shark mascot" className="mx-auto block w-full drop-shadow-[0_30px_35px_rgba(1,35,86,.35)]" />
          <div aria-hidden="true" className="pointer-events-none absolute left-[37.2%] top-[32.1%] h-[7.5%] w-[4.8%] rounded-full bg-[#090909] transition-transform duration-100 ease-out" style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }} />
          <div aria-hidden="true" className="pointer-events-none absolute left-[50.3%] top-[32.1%] h-[7.5%] w-[4.8%] rounded-full bg-[#090909] transition-transform duration-100 ease-out" style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }} />
          <button type="button" onClick={onEnter} className="absolute left-1/2 top-[49%] -translate-x-1/2 rounded-full border-4 border-[#160707] bg-[#f2d9b9] px-8 py-3 text-lg font-black uppercase tracking-[0.22em] text-[#3b1110] shadow-[0_7px_0_#160707,0_14px_24px_rgba(0,0,0,.3)] transition-transform hover:scale-105 active:translate-y-1 active:shadow-[0_3px_0_#160707] sm:px-12 sm:py-4 sm:text-2xl">Enter</button>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  const [entered, setEntered] = React.useState(false)

  if (!entered) return <SharkEntrance onEnter={() => setEntered(true)} />

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#031b2b]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-90" style={{ background: "radial-gradient(circle at 18% 18%, rgba(36, 177, 194, 0.34), transparent 32%), radial-gradient(circle at 82% 72%, rgba(7, 92, 128, 0.42), transparent 38%), linear-gradient(145deg, #062b3d 0%, #031b2b 45%, #02111f 100%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[20] h-20 overflow-hidden"><div className="absolute -inset-x-10 -top-10 h-24 rounded-[50%] border-b-2 border-cyan-100/45 bg-cyan-100/10 shadow-[0_12px_35px_rgba(75,224,232,0.25)]" /><div className="absolute inset-x-0 top-11 h-px bg-cyan-100/35 shadow-[0_0_16px_4px_rgba(109,242,239,0.35)]" /></div>
      <div className="relative z-10 h-full"><TimeMachine /></div>
    </main>
  )
}
