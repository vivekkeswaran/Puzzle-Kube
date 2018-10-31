import React from 'react';
import PropTypes from 'prop-types';
import './smallBox.css';

const SmallBox = (props) => {
    const style = {
        backgroundColor: props.bgColor,
        height: props.height,
        width: props.width,
        float: props.float
    };

    return (
        <div className={props.className} style={style}/>
    );
};

SmallBox.propTypes = {
    className: PropTypes.string,
    bgColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    float: PropTypes.string
};

export default SmallBox;