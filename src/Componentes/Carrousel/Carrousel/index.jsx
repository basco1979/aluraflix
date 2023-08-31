/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from '../VideoCard';
import Slider, { SliderItem } from '../Slider';

function Carrousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
      
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carrousel;