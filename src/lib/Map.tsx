import React, { useState, useEffect } from 'react'
import l from 'leaflet'
import 'leaflet.heat'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

// Styles
import 'leaflet/dist/leaflet.css'
import '../styles/leafletStyles.css'
import { LeafletMapProps, MapInfoProps } from '../interfaces'

export default function LeafletMap({ layerData, tileLayerImg }: LeafletMapProps) {
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 257,
    y: -87,
  })
  const [zoom, setZoom] = useState<number>(1)

  return (
    <MapContainer
      crs={l.CRS.Simple}
      center={[center.y, center.x]}
      zoom={zoom}
      className="map"
      attributionControl={false}
    >
      <MapInfo setZoom={setZoom} setCenter={setCenter} layerData={layerData}/>
      <TileLayer
        url={tileLayerImg}
        maxZoom={zoom}
        minZoom={zoom}
      />
    </MapContainer>
  )
}

function MapInfo({ setCenter, setZoom, layerData }: MapInfoProps) {
  const map = useMapEvents({
    move: () => {
      setZoom(map.getZoom())
      setCenter({ x: map.getCenter().lng, y: map.getCenter().lat })
    },
  })

  // Тепловая карта
  useEffect(() => {
    const layer= layerData.map( lay => (
      [lay.y, lay.x, lay.value]
    ))
    // @ts-ignore
    L.heatLayer(layer).addTo(map)
  }, [map, layerData])
  return null
}
