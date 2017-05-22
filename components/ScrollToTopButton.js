import React, { Component } from 'react'
import Scroll from 'react-scroll'

const scroll = Scroll.animateScroll

class ScrollToTopButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  onObserveScroll = (e) => {
    const scrollTop = e.srcElement.body.scrollTop
    let itemTranslate = Math.min(0, scrollTop / 3 - 60)
    this.setState({ isActive: itemTranslate === 0 })
  }

  onScrollTop = () => {
    scroll.scrollToTop({
      duration: 500,
      delay: 10,
      smooth: true
    })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onObserveScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onObserveScroll)
  }

  isActive = () => {
    return this.state.isActive ? 'scroll-active' : 'scroll-inactive'
  }

  render () {
    return (
      <button className={`scrollTop ${this.isActive()}`} onClick={this.onScrollTop}>
        ^
        <style jsx>{`
        .scroll-active {
          width: 30px;
          height: 30px;
          border: 2px solid #00d8ff;
          background-color: rgba(0,0,0,.7);
          border-radius: 5px;
          text-align: center;
          position: fixed;
          right: 5%;
          bottom: 5%;
          cursor: pointer;
          color: #00d8ff;
          z-index: 1000;
          font-size: 18pt;
        }
        .scroll-inactive {
          display: none
        }
      `}</style>
      </button>
    )
  }
}

export default ScrollToTopButton
