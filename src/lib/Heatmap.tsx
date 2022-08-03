/* eslint-disable react/require-default-props */
import { ChakraProvider } from '@chakra-ui/react'

// Screens
import Map, { ILayerPoit } from './Map'

export default function Heatmap({ heatmapLayer, layerImgUrl }: HeatmapProps) {

  const layerData = heatmapLayer?.length ? heatmapLayer : []
  const tileLayerImg = layerImgUrl?.length ? layerImgUrl : `${process.env.PUBLIC_URL}/imgs/{z}/{x}-{y}.png`
  return (
    <ChakraProvider>
      <Map layerData={layerData} tileLayerImg={tileLayerImg}/>
    </ChakraProvider>
  )
}


interface HeatmapProps {
  heatmapLayer?: ILayerPoit[]
  layerImgUrl?: string
}
