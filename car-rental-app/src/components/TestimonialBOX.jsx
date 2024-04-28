import React from "react";

function TestimonialBox(props) {
  return (
    <div className="testimonials-box">
      <p>{props.comment}</p>
      <div className="testimonials-person">
        <img src={props.img} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.city}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-quote"
          >
            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
