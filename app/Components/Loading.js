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
        const {text, intervalTime} = this.props;
        let stopper = `${text}...`;
        this.interval = setInterval(() =>
            this.setState((prevState) =>
                (prevState.text === stopper) ?
                    ({text: text}) : ({text: `${prevState.text}.`})),
            intervalTime);
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
