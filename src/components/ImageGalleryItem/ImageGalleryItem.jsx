const ImageGalleryItem = ({key, webformatURL, tags, }) => {
  return (
          <li key={ key}>
              <img src={webformatURL} alt={tags}/>
      </li>
     );
};


export default ImageGalleryItem;