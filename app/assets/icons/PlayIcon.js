import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = () => (
  <Svg width={94} height={94} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G filter="url(#a)">
      <Rect
        width={61.107}
        height={62.833}
        rx={23}
        transform="scale(1.0136 .9862) rotate(-45 53.35 18.726)"
        fill="#000"
      />
    </G>
    <Path
      d="m56.429 35.392-11.306 11M56.429 35.392l-7.195 20-4.111-9-9.25-4 20.556-7Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs></Defs>
  </Svg>
)

export default SvgComponent
