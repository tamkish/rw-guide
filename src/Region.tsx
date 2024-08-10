import { FC } from "react";
import { Grid } from "./Grid.tsx";
import { RegionData } from "./RegionData.tsx";
import Color from "colorjs.io";

export const Region: FC<{
  region: RegionData;
  selectedPart: number | null;
  onHover: (part: number) => void;
}> = ({ region, selectedPart, onHover }) => {
  // const color = useMemo(getRandomColor, []);
  const isRegionHovered = selectedPart != null;

  //todo memo
  const colorBase = region.color;
  const colorDark = new Color(colorBase).darken(0.3);
  const colorLight = new Color(colorBase).lighten(0.2);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: region.x * Grid,
          top: region.y * Grid,
          // backgroundColor: color,
          // width: w * Grid,
          // height: h * Grid,
        }}
      >
        {region.parts.map((part, index) => {
          const isPartHovered = selectedPart == index;

          const currentColor = isRegionHovered
            ? isPartHovered
              ? colorLight
              : colorBase
            : colorDark;

          //const border = selectedPart == index ? "solid white 1px" : "";
          return (
            <div
              key={index}
              onMouseOver={() => onHover(index)}
              style={{
                //border,
                position: "absolute",
                //todo animated pulse ig
                backgroundColor: new Color(currentColor).display(),
                width: part.w * Grid,
                height: part.h * Grid,
                top: (part.y ?? 0) * Grid,
                left: (part.x ?? 0) * Grid,
              }}
            />
          );
        })}
        {/*        <div
          style={{
            position: "absolute",
            zIndex: 20,
            fontWeight: isHovered ? "bold" : "normal",
          }}
        >
          name
        </div>*/}
      </div>
    </>
  );
};
