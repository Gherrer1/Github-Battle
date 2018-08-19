const React = require('react');

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Loading',
        };
    }

    componentDidMount() {
        let states = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
        let index = 0;
        let that = this;
        this.interval = setInterval(() => {
            (function(i) {
                that.setState({
                    text: states[index],
                });
            })(index);
            index++;
            index = index % states.length;
        }, this.props.intervalTime);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>{this.state.text}</div>
        );
    }
}
Loading.defaultProps = {
    intervalTime: 350,
};

module.exports = Loading;
