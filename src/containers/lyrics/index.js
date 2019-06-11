import React, { Component } from 'react'
import { StyledP } from './elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';


class Lyrics extends Component {

    styles = (lyrics, stanza, time) => {
        let past = lyrics.filter((stanza) => {
            return stanza.time < time;
        });
  
        let lastStanza = past.length > 0 ? past[past.length - 1].time : 0;

        return ({
           fontSize: stanza.time === lastStanza ? '2.0em' : '1.2em',
           animate: stanza.time === lastStanza ? 'pop 0.3s linear 1' : '', 
           color:stanza.time === lastStanza ? '#fefefe' : '#926363'
        });
    }

    render() {
        const { lyrics, time } = this.props;
        
        return (
            <div className="lyrics">
                {
                    lyrics.map((stanza, index) => {
                        return stanza.line === "" && index !== 0 && index !== lyrics.length - 1 ? 
                        <p>--</p> :
                        <StyledP styles={this.styles(lyrics, stanza, time)} key={stanza.time}>{stanza.line}</StyledP>
                    })
                }
            </div>
        );
    }
}


Lyrics.propTypes = {
    time: PropTypes.number
}

const mapStateToProps = (state) => ({
    time: state.playerReducer.time
});

const mapDispatchToProps = (dispatch) =>({
   
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Lyrics);