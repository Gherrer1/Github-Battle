const React = require('react');
const api = require('../utils/api');

class BattleGround extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOneData: null,
            playerTwoData: null,
        };
    }

    componentDidMount() {
        let search = this.props.location.search;
        setTimeout(() => {
            this.setState({
                playerOneData: {
                    name: 'greg',
                    team: 'blazers',
                },
                playerTwoData: {
                    name: 'kevin',
                    team: 'sonics',
                },
            });
        }, 1500);
    }

    render() {
        return (
            <div>
                {this.state.playerOneData && this.state.playerTwoData ?
                    <div>{JSON.stringify(this.state)}</div>
                    :
                    <div>Loading...</div>
                }
            </div>
        );
    }
}

module.exports = BattleGround;
