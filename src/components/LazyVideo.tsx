export default {
  functional: true,
  render(_, cx) {
    const { props, parent } = cx;
    const useAws = props.aws != null ? props.aws : true;
    const modifyUrl = useAws ? parent.aws : a => a;

    const video = <video class={props.className} mute autoplay loop poster={props.lazy} />;

    video.children = [];

    if (props.video) {
      if (useAws) {
        video.children.push(<source type="video/webm" src={modifyUrl(props.video, 'webm')} />);
      }
      video.children.push(<source type="video/mp4" src={modifyUrl(props.video)} />);
    } else {
      video.children.push(<source type="video/mp4" src="" />);
    }

    if (props.image) {
      video.children.push(<img src={modifyUrl(props.image)} />);
    }

    if (props.lazy) {
      video.children.push(<img src={props.lazy} />);
    }

    return video;
  }
};
