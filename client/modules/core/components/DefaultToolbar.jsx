import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import toggleMenu from '../actions'

const styles = {
  content: {
    // position: "fixed",
    // minHeight: 0,
    height: 300,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: 'url(http://lorempixel.com/1600/300/nature)'
  },
  title: {}
}

class DefaultToolbarImpl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileView: window.innerWidth < 1024
    }

    this.handleResize = () => {
      this.setState({
        mobileView: window.innerWidth < 1024
      })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleMenu() {
    if (this.state.mobileView) {
      this.props.dispatch(toggleMenu())
    }
  }

  render() {
    return (
      <div>
        <AppBar
          style={styles.content}
          title={this.props.title}
          titleStyle={styles.title}
          onLeftIconButtonTouchTap={() => this.toggleMenu()}
          showMenuIconButton
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
})

export const DefaultToolbar = connect(mapStateToProps)(DefaultToolbarImpl)
