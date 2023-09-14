"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';

export default function Ios() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Header/>
    </>
  )
}

