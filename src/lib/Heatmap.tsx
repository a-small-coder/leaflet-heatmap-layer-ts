import { ChakraProvider } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { HeatmapProps } from '../interfaces'

// Screens
import Map from './Map'


export default function Heatmap({ heatmapLayer, layerImgUrl }: HeatmapProps): ReactElement {

  const layerData = heatmapLayer?.length ? heatmapLayer : []
  const tileLayerImg = layerImgUrl?.length ? layerImgUrl : `${process.env.PUBLIC_URL}/imgs/{z}/{x}-{y}.png`
  return (
    <ChakraProvider>
      <Map layerData={layerData} tileLayerImg={tileLayerImg}/>
    </ChakraProvider>
  )
}
