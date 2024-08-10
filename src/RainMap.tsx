import { Fragment, useMemo, useState } from "react";
import { Region } from "./Region.tsx";
import { Grid } from "./Grid.tsx";
import { RegionData } from "./RegionData.tsx";
import Color from "colorjs.io";
import { getRandomColor } from "./colors.ts";

export const RainMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<{
    region: string;
    part: number;
  } | null>(null);

  const regions = useMemo((): RegionData[] => {
    const SI: RegionData = {
      id: "SI",
      name: "Sky Islands",
      color: new Color(getRandomColor()),

      parts: [{ w: 5, h: 3 }],
      y: 2,
      x: 5,
    };
    const LF: RegionData = {
      id: "LF",
      name: "Farm Arrays",
      color: new Color(getRandomColor()),

      parts: [{ w: 4, h: 3 }],
      y: 6,
      x: 3,
    };
    const VS: RegionData = {
      id: "VS",
      name: "Pipeyard",
      color: new Color(getRandomColor()),

      parts: [{ w: 2, h: 4 }],
      x: 8,
      y: 6,
    };
    const CC: RegionData = {
      id: "CC",
      name: "Chimney Canopy",
      color: new Color(getRandomColor()),

      parts: [{ w: 3, h: 3 }],
      x: 11,
      y: 3,
    };
    const HI: RegionData = {
      id: "HI",
      name: "Industrial Complex",
      color: new Color(getRandomColor()),

      parts: [{ w: 2, h: 5 }],
      x: 12,
      y: 7,
    };
    const SU: RegionData = {
      id: "SU",
      name: "Outskirts",
      color: new Color(getRandomColor()),

      parts: [{ w: 4, h: 1 }],
      x: 6,
      y: 11,
    };
    const DS: RegionData = {
      id: "DS",
      name: "Drainage System",
      color: new Color(getRandomColor()),

      parts: [{ w: 5, h: 1 }],
      x: 8,
      y: 13,
    };
    const UW: RegionData = {
      id: "UW",
      name: "The Exterior",
      color: new Color(getRandomColor()),

      parts: [
        { w: 1, h: 7, name: "The Wall" },
        { h: 1, w: 3, y: 6, x: 1, name: "Underhang" },
        { w: 1, h: 4, y: 6, x: 4, name: "The Leg" },
      ],
      x: 15,
      y: 1,
    };
    const SS: RegionData = {
      id: "SS",
      name: "Five pebbles",
      color: new Color(getRandomColor()),

      parts: [
        { w: 4, h: 4 },
        { w: 1, h: 2, x: 2, name: "General Systems Bus" },
        { w: 1, h: 2, x: 3, name: "Memory Conflux" },
        { w: 1, h: 1, name: "Recursive Transform Array" },
        { w: 2, h: 2, x: 2, y: 2, name: "Unfortunate Development" },
      ],
      x: 17,
      y: 2,
    };
    const SH: RegionData = {
      id: "SH",
      name: "Shaded Citadel",
      color: new Color(getRandomColor()),

      parts: [{ w: 3, h: 2 }],
      x: 15,
      y: 9,
    };
    const SL: RegionData = {
      id: "SL",
      name: "Shoreline",
      color: new Color(getRandomColor()),

      parts: [
        { w: 5, h: 2 },
        {
          w: 1,
          h: 1,
          x: 2,
          y: -5,
          name: "Precipice",
        },
        {
          w: 2,
          h: 1,
          x: 5,
          y: 1,
          name: "Looks to the Moon",
        },
      ],
      x: 19,
      y: 12,
    };
    return [SI, LF, VS, CC, HI, SU, DS, UW, SS, SH, SL];
  }, []);

  const selectedRegionData = useMemo(
    (): RegionData | undefined =>
      regions.find((region) => region.id == hoveredRegion?.region),
    [hoveredRegion?.region, regions],
  );

  const selectedPart = useMemo(() => {
    if (!selectedRegionData) return undefined;

    return selectedRegionData.parts.find(
      (value, index) => index == hoveredRegion?.part,
    );
  }, [hoveredRegion?.part, selectedRegionData]);

  return (
    <>
      <div style={{ height: "4em" }}>
        <h2>{selectedRegionData?.name}</h2>
        <h3>{selectedPart?.name}</h3>
      </div>
      <div style={{ position: "relative" }}>
        {(() => {
          const out = [];
          for (let i = 0; i < 28; i++) {
            out.push(i);
          }
          return out;
        })().map((column) =>
          (() => {
            const out = [];
            for (let i = 0; i < 16; i++) {
              out.push(i);
            }
            return out;
          })().map((row) => (
            <div
              style={{
                position: "absolute",
                width: Grid,
                height: Grid,
                top: Grid * row,
                left: Grid * column,
                backgroundColor:
                  row % 2 != column % 2
                    ? "rgba(0,50,0,0.4)"
                    : "rgba(0,0,50,0.4)",
                zIndex: -10,
              }}
            />
          )),
        )}

        {regions.map((region) => {
          const selectedPart =
            hoveredRegion?.region == region.id ? hoveredRegion.part : null;
          const onHover = (part: number) =>
            setHoveredRegion({ region: region.id, part });

          return (
            <Fragment key={region.id}>
              <Region
                region={region}
                selectedPart={selectedPart}
                onHover={onHover}
              />
            </Fragment>
          );
        })}

        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            width: Grid * 28,
            height: Grid * 21,
          }}
          onMouseOver={() => setHoveredRegion(null)}
        />
      </div>
      <p>
        this is very much work in progress.
        <br />
        send me your feedback/ideas on discord (
        <a href={"discord.com/users/323104013165789184"}>tamkish</a>) or on
        github
      </p>
    </>
  );
};
