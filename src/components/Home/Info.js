import React from "react"
import { Link } from "gatsby"

export default function Info({ text, title, ctalink, ctatext }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <h1 className="display-4 text-capitlize font-weight-bold">
              {title}
            </h1>
          </div>
        </div>
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
