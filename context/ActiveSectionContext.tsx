"use client"
import React, { createContext, useState } from 'react'
import type { SectionName } from '@/lib/types'

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextProviderType = {
    active: SectionName
    setActive: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>> 
}   

const ActiveSectionContext = createContext<ActiveSectionContextProviderType | null>(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
  const [active, setActive] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider value={{ active, setActive , timeOfLastClick, setTimeOfLastClick}}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider')
  }
  return context
}
