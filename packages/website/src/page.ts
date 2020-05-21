import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export class Content<T> extends Vue {
  json!: T;

  get content(): T {
    return this.json;
  }
}

export default function Page<T>(json: T) {
  return class extends Content<T> {
    json = json;
  };
}
