import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "dsdfas gfghyte erfhtygs yefwehh5y wrtj4tgrthr terwhyurwtw wrth5ygwh terhtu",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "dsdfas gfghyte erfhtygs yefwehh5y wrtj4tgrthr terwhyurwtw wrth5ygwh terhtu",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "dsdfas gfghyte erfhtygs yefwehh5y wrtj4tgrthr terwhyurwtw wrth5ygwh terhtu",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "dsdfas gfghyte erfhtygs yefwehh5y wrtj4tgrthr terwhyurwtw wrth5ygwh terhtu",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
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
