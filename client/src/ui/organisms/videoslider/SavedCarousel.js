import React from 'react';
import nanoid from 'nanoid';
import Video from '../../atoms/video';
import Chevron from '../../atoms/chevron';
import Carousel from 'nuka-carousel';
export class SavedCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Carousel
        dragging={false}
        wrapAround={true}
        cellSpacing={32}
        renderCenterLeftControls={({ previousSlide }) => (
          <Chevron onClick={previousSlide} direction="left" />
        )}
        renderCenterRightControls={({ nextSlide }) => <Chevron onClick={nextSlide} />}
        renderBottomCenterControls={null}
      >
        {this.props.videos.map(vid => (
          <div key={nanoid()}>
            <Video src={vid.src} placeholder={vid.placeholder} />
          </div>
        ))}
      </Carousel>
    );
  }
}
