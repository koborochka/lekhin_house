import React from 'react'
import AdoptTitle from '../components/AdoptTitle'
import { AdoptList } from '../components/AdoptList'

export default function AdoptPage() {
  return (
    <>
        <AdoptTitle />
        <AdoptList maxLength={5}/>
    </>
  )
}
