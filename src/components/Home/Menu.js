import React, { Component } from 'react'

import Title from '../Globals/Title'
import Img from 'gatsby-image'

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
            <Title title="best of our menu" />
            {/* categories */}
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map({node})}
            </div>
          </div>
        </section>
      )
    }
    else {
      return (
        <section className='menu py-5'>
          <div className='container' >
            <Title title='best of our menu' />
            <div className='row' >
              <div className='col-10 col-sm-6 mx-auto text-center text-capitalize' >
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
