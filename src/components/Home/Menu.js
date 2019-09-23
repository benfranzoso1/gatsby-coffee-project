import React, { Component } from "react"
import Img from "gatsby-image"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <h1 className="display-4 text-capitlize font-weight-bold">
                  Our Menu
                </h1>
              </div>
            </div>
            {/* catergoires */}
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0">${node.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <h1 className="display-4 text-capitlize font-weight-bold">
                  Our Menu
                </h1>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <h1>there are no items</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
