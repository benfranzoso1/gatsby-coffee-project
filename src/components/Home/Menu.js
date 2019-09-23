import React, { Component } from "react"
import Img from "gatsby-image"

// Get catergories and filter them down
const getCatergories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      catergoires: getCatergories(props.items.edges),
    }
  }

  handleItmes = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { coffeeItems: items }
      })
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
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.catergoires.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.handleItmes(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
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
