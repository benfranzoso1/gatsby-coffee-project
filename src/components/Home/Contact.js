import React from "react"

export default function Contact({ title }) {
  return (
    <section className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <h1 className="display-4 text-capitlize font-weight-bold">
              {title}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/benfranzoso38@gmail.com"
              method="post"
            >
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="John Smith"
                />
              </div>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
              </div>
              {/* description */}
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  row="5"
                  placeholder="your description"
                ></textarea>
                {/* submit */}
                <button
                  type="submit"
                  className="btn btn-yellow btn-block text-capitalize mt-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
