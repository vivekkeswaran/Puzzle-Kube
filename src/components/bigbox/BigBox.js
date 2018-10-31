import React from 'react';
import SmallBox from "../smallbox/SmallBox";
import {BOXES, COLORS} from "../../constants/constant";
import * as ReactDOM from "react-dom";

class BigBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 0,
            color: null,
            height: 0
        };
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        this.setState({height: node.clientHeight});
    }

    init = () => {
        let {level} = this.state,
            color = COLORS[Math.floor((Math.random() * (COLORS.length)))],
            count = BOXES[level],
            squares = count * count, index = 0, smallBox = [];

        while (index < squares) {
            // spaces are the margin and padding spaces
            let spaces = 5 * count + 4;

            smallBox = [...smallBox, this.renderSmallBox(spaces, count, color)];

            index++;
        }

        return smallBox;
    };

    renderSmallBox = (spaces, count, color) => {
        let boxHeight = this.state.height,
            height = boxHeight - spaces,
            H = height / count + "px",
            w = (height / count) + 0.04 * count + "px";

        return (
            <SmallBox className="SmallBox" bgColor={color} height={H} width={w} float="left"/>
        );
    };

    render() {
        const {init} = this;

        return (
            <div className="bigbox">
                {init()}
            </div>
        )
    }
}

export default BigBox;