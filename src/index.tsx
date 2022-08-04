import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { HeatmapProps } from './interfaces'

// Screens
import Map from './lib/Map'


export default function Heatmap({ heatmapLayer, layerImgUrl }: HeatmapProps): JSX.Element {

  const layerData = heatmapLayer?.length ? heatmapLayer : []
  const tileLayerImg = layerImgUrl?.length ? layerImgUrl : `./imgs/{z}/{x}-{y}.png`
  return (
    <ChakraProvider>
      <Map layerData={layerData} tileLayerImg={tileLayerImg}/>
    </ChakraProvider>
  )
}