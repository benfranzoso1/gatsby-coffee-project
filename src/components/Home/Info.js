import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info({ text, ctalink, ctatext }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">{text}</p>
            <Link to={ctalink}>
              <button className="btn text-uppercase btn-yellow">
                {ctatext}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
