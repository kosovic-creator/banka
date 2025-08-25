'use client'
import React, { useState } from 'react'

const Page = () => {
  const [kredit, setKredit] = useState<number | null>(null)
  const [stanje, setStanje] = useState<number | null>(null)
  const [isActive, setIsActive] = useState<boolean | null>(null)
  const [uplata, setUplata] = useState<number | null>(null)
  const [isplata, setIsplata] = useState<number | null>(null)

  return (
    <>
      <button type='button'  className="flex-1 bg-green-500 hover:bg-green-450 text-white py-2 rounded font-medium transition cursor-pointer"  onClick={() => setUplata(500)}>Uplata</button>
      <div>Kredit: {kredit}</div>
      <div>Stanje: {stanje}</div>
      <div>Is Active: {isActive ? 'Yes' : 'No'}</div>
      <div>Uplata: {uplata}</div>
      <div>Isplata: {isplata}</div>
    </>
  )
}

export default Page


