import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { HeatmapProps } from './interfaces'

// Screens
import Map from './lib/Map'

import theme from './theme'


export default function Heatmap({ heatmapLayer, layerImgUrl }: HeatmapProps): JSX.Element {

  const layerData = heatmapLayer?.length ? heatmapLayer : []
  const tileLayerImg = layerImgUrl?.length ? layerImgUrl : `./imgs/{z}/{x}-{y}.png`
  return (
    <ChakraProvider theme={theme}>
      <Map layerData={layerData} tileLayerImg={tileLayerImg}/>
    </ChakraProvider>
  )
}