import Vue, { RenderContext } from 'vue';

export default Vue.extend({
  functional: true,
  render(_: unknown, cx: RenderContext<{ to: string }>) {
    const { props, children } = cx;

    return (
      <li class="nav-item">
        <g-link class="nav-link" to={props.to}>
          {children}
        </g-link>
      </li>
    );
  }
});
