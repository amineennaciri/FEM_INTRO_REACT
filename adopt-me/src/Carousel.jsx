import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
    name: "luna",
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  /*static default props is used if the carousel is called without receiving any props*/
  /*be aware that this.props is immutable, however, this.state is mutable*/
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };
  /*when we use an arrow function we don't create a new scope in contrast to a normal function */
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
/*class components and hooks do not mix*/
export default Carousel;
