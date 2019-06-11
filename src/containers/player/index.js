import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { onTimeUpdate } from './action';

class Player extends Component {
    audioPlayer;

    constructor(props) {
        super(props);
        this.player = React.createRef();
    }

    
    componentDidMount() {
        this.player.current.onplaying = function() {
        };

        this.player.current.ontimeupdate = () => {
            let time = this.player.current.currentTime * 1000;
            this.props.onTimeUpdate(time);
        };
     
    }
    

    render() {
        return (
            <div className="player">
                <div className="left"></div>
                <div className="right">
                    <div className="top">
                        <a className="song" href="https://open.spotify.com/track/52LlzTfdulBMiwH4BZy5Sq?si=1c1rwqNYSf6ZaaRbzlstLQ">Let's Go To the Forest</a>
                        <a className="artist" href="https://open.spotify.com/artist/6OqhFYFJDnBBHas02HopPT?si=vQaSwY1DRkyhj-eoKZlMrw">Kero Kero Bonito</a>
                    </div>
                    <div className="bottom">
                        <video id="audioPlayer" ref={this.player} controls name="media" >
                            <source src="https://i.koya.io/Kero%20Kero%20Bonito%20-%20Let's%20Go%20To%20The%20Forest.mp3" type="audio/mpeg">
                            </source>
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    onTimeUpdate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) =>({
    onTimeUpdate: (time) => dispatch(onTimeUpdate(time))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Player);
