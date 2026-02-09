"use client";
import React, { useState } from "react";

export const Accordion = (props: { title: string; children: React.ReactNode }) => {
  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };

  const { title, children } = props;
  const { cardState } = state;

  return (
    <div className="column is-full">
      <div className="card" aria-hidden={cardState ? "false" : "true"}>
        <header
          className="card-header"
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <p className="card-header-title">{title}</p>
          <a className="card-header-icon">
            <span
              className="icon"
              style={{
                transform: cardState ? undefined : "rotate(180deg)",
                transition: "transform 250ms ease-out"
              }}
            >
              <i className="fa fa-angle-up"></i>
            </span>
          </a>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? undefined : 0,
            overflow: "hidden",
            transition: "max-height 250ms ease, padding 250ms ease"
          }}
        >
          <div className="content">{children} </div>
        </div>
      </div>
    </div>
  );
}