import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import us from '../../data/maps/states-albers-10m.json';
import alumni from '../../data/sets/alumni.json';

// TODO Move alumni data outside of this component.

const country = topojson.feature(us, us.objects.nation);
const states = topojson.mesh(us, us.objects.states, (a, b) => a !== b);
// TODO Support json imports in typescript
const locatedAlumni = (alumni as { lat: number; lng: number }[]).filter(a => a.lat && a.lng);

// TODO Add intrinsic TSX types.

export default {
  functional: true,
  render(
    _: unknown,
    cx: {
      props: {
        width: number;
        height: number;
        margin: number;
        id: number;
      };
    }
  ) {
    const { props } = cx;
    const { width, height, id } = props;

    const projection = d3
      .geoAlbersUsa()
      .scale(1300)
      .translate([487.5, 305]);

    const path = d3.geoPath();

    return (
      <svg
        ref="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 975 610"
        id={id}
        width={width}
        height={height}
      >
        <g fill="none" stroke="#000" stroke-linejoin="round" stroke-linecap="round">
          <path stroke-width="0.5" d={path(states)}></path>
          <path d={path(country)}></path>
        </g>
        <g>
          {locatedAlumni.map((a: { lat: number; lng: number }) => {
            const [x, y] = projection([a.lng, a.lat]) ?? [null, null];

            return (
              <circle
                onMouseover={(event: MouseEvent) => {
                  const circle = event.target as SVGCircleElement;

                  circle.setAttribute('r', '20');
                }}
                onMouseleave={(event: MouseEvent) => {
                  const circle = event.target as SVGCircleElement;

                  circle.setAttribute('r', '10');
                }}
                cx={x}
                cy={y}
                fill="white"
                stroke="red"
                stroke-width="4px"
                r="10"
              ></circle>
            );
          })}
        </g>
      </svg>
    );
  }
};
