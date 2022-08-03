import { Dispatch, SetStateAction } from "react";

export interface HeatmapProps {
    heatmapLayer?: ILayerPoit[]
    layerImgUrl?: string
  }


  // Types
export interface MapInfoProps {
    setZoom: Dispatch<number>
    setCenter: Dispatch<SetStateAction<{ x: number; y: number }>>
    layerData: ILayerPoit[]
  }
  
  export interface LeafletMapProps {
    layerData: ILayerPoit[]
    tileLayerImg: string
  }
  
  export interface ILayerPoit {
    x: number 
    y: number 
    value: number
  }