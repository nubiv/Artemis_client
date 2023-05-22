'use client'
import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

export default function Map() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_MAPBOX_KEY) {
      throw Error('Invalid Mapbox Key.')
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY ?? ''

    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [126.9784, 37.5665],
      zoom: 12
    })

    return () => map.remove()
  }, [])

  return (
    <div className='rounded-lg mb-[150px] h-full p-4 mx-10 relative'>
      <div
        id='map-container'
        className='rounded-lg h-[80vh] relative z-0'
      />
  </div>
  )
}
