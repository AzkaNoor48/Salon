import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
//import testphotodata from "./testphotodata"
import photos from "./photos";

  class Portfolio extends React.Component{
  constructor(){
    super()
    this.state = { currentImage: 0 }; 
    this.closeLightbox = this.closeLightbox.bind(this); 
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    console.log('open')
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });  
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    }); 
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });  
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    }); 
  }
  render(){
    return(
      <> 
      <link rel="stylesheet" type="text/css" href="assets/css/Portfolio.css" />

      <div>
          <h2>Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
      </div>

      <div style={{overflowY:'scroll', height:'400px',}}>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
      </>
    )
  }
}
export default Portfolio;
