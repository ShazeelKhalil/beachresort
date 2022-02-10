import React, { Component } from "react";
import defaultBgimg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  static contextType = RoomContext;
  constructor(props) {
    super(props);
    console.log("props :", props);
    console.log("This.state :", this.props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBgimg,
    };
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log("room :", room);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to room
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <Hero hero="rooms-hero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
