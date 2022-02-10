import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { icons } from "react-icons/lib";

export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "free cocktail",
        info: "Lorem ipsum dolor SIR AMIT consectetur adipisicing elit. magni, corporis",
      },
      {
        icons: <FaHiking />,
        title: "endless hiking",
        info: "Lorem ipsum dolor SIR AMIT consectetur adipisicing elit. magni, corporis",
      },
      {
        icons: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem ipsum dolor SIR AMIT consectetur adipisicing elit. magni, corporis",
      },
      {
        icons: <FaBeer />,
        title: "Srongest beer",
        info: "Lorem ipsum dolor SIR AMIT consectetur adipisicing elit. magni, corporis",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
