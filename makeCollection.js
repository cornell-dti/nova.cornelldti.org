const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, process.argv[2]), { encoding: 'utf-8' })
const json = JSON.parse(raw);

function pad(x) {
  return "".padStart(x, " ");
}

class NCBase {


  constructor(name, label) {
    this.type = "unknown";
    this.name = name;
    this.label = label;
  }
  static fromJSON(name, label, json) {
    throw new Error("Not implemented");
  }

  toString(padding = 0) {
    return `${pad(padding)}- {label: "${this.label}", name: "${this.name}", widget: "${this.type}"}`
  }
}

class NCBoolean extends NCBase {
  constructor(...args) {
    super(...args);
    this.type = "boolean";
  }

}
class NCDate extends NCBase { }
class NCTime extends NCBase { }
class NCFile extends NCBase { }
class NCHidden extends NCBase { }
class NCImage extends NCBase { }
class NCList extends NCBase { }
class NCMap extends NCBase { }
class NCMarkdown extends NCBase { }
class NCNumber extends NCBase {
  constructor(...args) {
    super(...args);
    this.type = "number";
  }
}
class NCRelation extends NCBase { }
class NCSelect extends NCBase { }
class NCString extends NCBase {
  constructor(...args) {
    super(...args);
    this.type = "string";
  }
}
class NCText extends NCBase {
  constructor(...args) {
    super(...args);
    this.type = "text";
  }
}

class NCObject extends NCBase {
  constructor(...args) {
    super(...args);
    this.type = "object";
    this.members = [];
  }

  toFields() {
    return this.members.map(m => m.name).join('\n');
  }

  toString(padding = 0) {
    return `${pad(padding)}- label: "${this.label}"
${pad(padding)}  name: "${this.name}"
${pad(padding)}  widget: "object"
${pad(padding)}  fields:
${this.members.map(m => m.toString(padding + 4)).join('\n')}`
  }

  static fromJSON(name, label, json) {
    const obj = new NCObject(name, label);

    obj.members = Object.keys(json).map(k => [k, json[k]]).map(
      ([key, value]) => {
        if (typeof value === 'boolean') {
          return new NCBoolean(key, key);
        }

        if (typeof value === 'string') {
          if (value.length > 200) {
            return new NCText(key, key);
          } else {
            return new NCString(key, key);
          }
        }

        if (typeof value === 'number') {
          return new NCNumber(key, key);
        }

        if (typeof value === 'object') {
          if (Array.isArray(value)) {
            return NCList.fromJSON(key, key, value);
          } else {
            return NCObject.fromJSON(key, key, value);
          }
        }
      }
    )
    return obj;
  }
}

if (process.argv[4] && process.argv[4] === "1") {
  console.log(NCObject.fromJSON(process.argv[3], process.argv[3], json).toFields());
} else {
  console.log(NCObject.fromJSON(process.argv[3], process.argv[3], json).toString(6));
}