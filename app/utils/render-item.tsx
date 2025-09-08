 import { SlideItem } from "../components/SlideItem";
 import { ImageStyle, StyleProp } from "react-native";
 import { CarouselRenderItem } from "react-native-reanimated-carousel";

 interface ICarouselItemOptions {
   rounded?: boolean;
   style?: StyleProp<ImageStyle>;
   source: string[]
 }

 export const renderItem =
   ({ rounded = false, style, source }: ICarouselItemOptions): CarouselRenderItem<any> =>
   ({ index }: { index: number }) => (
     <SlideItem key={index} index={index} rounded={rounded} style={style} source={source} />
   );