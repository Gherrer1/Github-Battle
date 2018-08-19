const React = require('react');
const PropTypes = require('prop-types');

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
        };
    }

    componentDidMount() {
        let stopper = `${this.props.text}...`;
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.text === stopper) {
                    return {
                        text: this.props.text,
                    };
                } else {
                    return {
                        text: `${prevState.text}.`,
                    };
                }
            });
        }, this.props.intervalTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={this.props.style}>{this.state.text}</div>
        );
    }
}
Loading.propTypes = {
    text: PropTypes.string,
    intervalTime: PropTypes.number,
    style: PropTypes.object,
},
Loading.defaultProps = {
    intervalTime: 350,
    text: 'Loading',
};

module.exports = Loading;
