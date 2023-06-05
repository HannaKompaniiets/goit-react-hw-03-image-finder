import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


const ImageGallery = ({ images}) => {
    return (
        
          <ul>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </ul>
        );
    }

   export default ImageGallery;