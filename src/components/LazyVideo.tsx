export default {
  functional: true,
  render(
    _: unknown,
    cx: {
      props: {
        aws: boolean;
        className: string;
        lazy: boolean;
        image: string;
        video: string | { webm: string; mp4: string };
      };
    }
  ) {
    const { props } = cx;
    const useAws = props.aws != null ? props.aws : true;

    const video = <video class={props.className} mute autoplay loop poster={props.lazy} />;

    video.children = [];

    if (props.video) {
      if (useAws) {
        if (typeof props.video === 'string') {
          video.children.push(<source type="video/mp4" src={props.video} />);
        } else {
          video.children.push(<source type="video/webm" src={props.video.webm} />);
          video.children.push(<source type="video/mp4" src={props.video.mp4} />);
        }
      } else {
        video.children.push(<source type="video/mp4" src={props.video} />);
      }
    } else {
      video.children.push(<source type="video/mp4" src="" />);
    }

    if (props.image) {
      video.children.push(<img src={props.image} />);
    }

    if (props.lazy) {
      video.children.push(<img src={props.lazy} />);
    }

    return video;
  }
};
