import * as d3 from 'd3';

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
        outerRadius: number;
        innerRadius: number;
        data: { [key: string]: number };
      };
    }
  ): JSX.Element {
    const { props } = cx;
    const { width, height, id, outerRadius, innerRadius, data } = props;

    const transform = `translate(${width / 2},${height / 2})`;

    const fillColor = d3
      .scaleOrdinal()
      .domain(Object.keys(data))
      .range(['#ff324a', 'rgb(236, 236, 236)']);
    const strokeColor = 'grey';

    const pie = d3
      .pie<void, { key: string; value: number }>()
      .value(d => d.value)
      .sort(null);
    const entries = d3.entries(data);
    const preppedData = pie(entries);

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const paths = preppedData.map(d => {
      return (
        <path
          stroke={strokeColor}
          fill={fillColor(d.data.key)}
          d={arc((d as unknown) as d3.DefaultArcObject)}
          strokeLinecap="round"
        />
      );
    });

    return (
      <svg
        ref="svg"
        xmlns="http://www.w3.org/2000/svg"
        class="fill circle-svg"
        id={id}
        width={width}
        height={height}
      >
        <g transform={transform}>{paths}</g>
      </svg>
    );
  }
};
