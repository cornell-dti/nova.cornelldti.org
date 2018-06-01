export class PathTemplate {
  constructor() {
    this.pathData = [];
  }
  static ZERO() {
    return 0;
  }
  static ONE() {
    return 1;
  }

  line(x, y) {
    this.pathData.push({
      template: parameters =>
        `L ${
          typeof x === 'string' ? parameters[x] : x.call(this, parameters)
        } ${typeof y === 'string' ? parameters[y] : y.call(this, parameters)}`
    });

    return this;
  }
  circulararc(radius, largeArc, sweep, x, y) {
    this.pathData.push({
      template: parameters =>
        `A ${
          typeof radius === 'string'
            ? parameters[radius]
            : radius.call(this, parameters)
        } ${
          typeof radius === 'string'
            ? parameters[radius]
            : radius.call(this, parameters)
        } 0 ${
          typeof largeArc === 'string'
            ? parameters[largeArc]
            : largeArc.call(this, parameters)
        } ${
          typeof sweep === 'string'
            ? parameters[sweep]
            : sweep.call(this, parameters)
        } ${typeof x === 'string' ? parameters[x] : x.call(this, parameters)} ${
          typeof y === 'string' ? parameters[y] : y.call(this, parameters)
        }`
    });

    return this;
  }
  move(x, y) {
    this.pathData.push({
      template: parameters =>
        `M ${
          typeof x === 'string' ? parameters[x] : x.call(this, parameters)
        } ${typeof y === 'string' ? parameters[y] : y.call(this, parameters)}`
    });

    return this;
  }

  end() {
    this.pathData.push({
      template: () => `Z`
    });

    return this;
  }

  commands(parameters) {
    const commands = [];

    for (const param of this.pathData) {
      commands.push(param.template(parameters));
    }

    return commands;
  }
}

export default class Path {
  constructor() {
    this.pathData = [];
  }
  line(x, y) {
    this.pathData.push(`L ${x} ${y}`);

    return this;
  }
  circulararc(radius, largeArc, sweep, x, y) {
    this.pathData.push(
      `A ${radius} ${radius} 0 ${largeArc} ${sweep} ${x} ${y}`
    );

    return this;
  }
  move(x, y) {
    this.pathData.push(`M ${x} ${y}`);

    return this;
  }

  end() {
    this.pathData.push(`Z`);

    return this;
  }

  data() {
    let data = '';

    for (const param of this.pathData) {
      data += ` ${param}`;
    }

    return data;
  }

  arr() {
    return [...this.pathData];
  }
}
