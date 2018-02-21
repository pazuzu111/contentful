import React, { Component } from 'react';
import './App.css';

//import contentful
import * as contentful from 'contentful'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let client = contentful.createClient({
      space: 'g6yg59ontu2f',
      accessToken: 'f659197ac2e70d5c3bc7fce3db41e836949e44b2660b2f98dfd0cc713f8b100a'
    })

    client.getEntries({content_type: 'post'})
          .then(res => {
            this.setState({
              posts: res.items
            })
            console.log(res.items)
          })
  }

  render() {
      let posts =
                  this.state.posts.map((x,i) => {
                    return (
                        <div key={i} className="col s8">
                            <h1>{x.fields.title}</h1>
                            <img  className="responsive-img z-depth-4"
                                  src={x.fields.image.fields.file.url}
                                  alt={x.fields.title} />
                            <h4>{x.fields.body}</h4>
                            <h6>{x.fields.publishDate}</h6>
                        </div>
                    )
                  })

      let nav = <div className='navbar-fixed'>
                  <nav>
                    <div className="nav-wrapper transparent">
                      <a href="#!" className="brand-logo">NYCL</a>
                      <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>


    return (
        <div>
          <div className="imgback">
            {nav}
          </div>
          <div className="bgcolor">
            <div className="row container">
              {posts}
            </div>
          </div>
        </div>
    )
  }
}
