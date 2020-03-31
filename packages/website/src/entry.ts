import Vue from 'vue';
import Component from 'vue-class-component';

interface EntryPage<T> {
  content: T;
}

@Component({})
export default class Entry<T> extends Vue {
  get content() {
    if (!this.$page) {
      return null;
    }
    return (this.$page as EntryPage<T>).content;
  }
}
