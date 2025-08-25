'use client'
import React, { useEffect, useState } from 'react'

type Stanje = {
  id: number;
  korisnik: string;
  matičniBroj: string;
  stanje: number;
  kredit: number;
  isplata: number;
  uplate: number;
};

const Page = () => {
  const [kredit, setKredit] = useState<number | null>(null)
  const [stanje, setStanje] = useState<Stanje | null>(null)
  const [isActive, setIsActive] = useState<boolean | null>(null)
  const [uplata, setUplata] = useState<number | null>(null)
  const [isplata, setIsplata] = useState<number | null>(null)

   useEffect(() => {
      fetch('/api/stanje')
        .then(async res => {
          if (!res.ok) return null;
          try {
            return await res.json();
          } catch {
            return null;
          }
        })
        .then(setStanje);
    }, []);

  return (
    <>
      <button type='button'  className="flex-1 bg-green-500 hover:bg-green-450 text-white py-2 rounded font-medium transition cursor-pointer"  onClick={() => setUplata(500)}>Uplata</button>
     
      <div>
        
        <div>ID: {stanje?.id}</div>
        <div>Korisnik: {stanje?.korisnik}</div>
        <div>Matični broj: {stanje?.matičniBroj}</div>
        <div>Iznos: {stanje?.stanje}</div>
        <div>Kredit: {stanje?.kredit}</div>
        <div>Isplata: {stanje?.isplata}</div>
        <div>Uplate: {stanje?.uplate}</div>
      </div>
      <div>Is Active: {isActive ? 'Yes' : 'No'}</div>
      <div>Uplata: {uplata}</div>
     
    </>
  )
}

export default Page


