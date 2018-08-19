const React = require('react');
const api = require('../utils/api');
const Result = require('./Result');

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
                    id: 1,
                },
                playerTwoData: {
                    name: 'kevin',
                    team: 'sonics',
                    id: 2,
                },
            });
        }, 1500);
    }

    render() {
        let p1 = this.state.playerOneData;
        let p2 = this.state.playerTwoData;
        return (
            <div>
                {p1 && p2 ?
                    <div>
                        {[p1, p2].map((player) => (
                            <Result key={player.id} playerData={player} />
                        ))}
                    </div>
                    :
                    <div>Loading...</div>
                }
            </div>
        );
    }
}

module.exports = BattleGround;
