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
        let usernameKeyValues = search.slice(1).split('&');
        const p1Username = usernameKeyValues[0].split('=')[1];
        const p2Username = usernameKeyValues[1].split('=')[1];
        api.battle([p1Username, p2Username])
            .then((profileDataArr) => {
                console.log(profileDataArr);
                if (profileDataArr === null) {
                    return;
                }
                this.setState({
                    playerOneData: profileDataArr[0],
                    playerTwoData: profileDataArr[1],
                });
            });
    }

    render() {
        let p1 = this.state.playerOneData;
        let p2 = this.state.playerTwoData;
        return (
            <div>
                {p1 && p2 ?
                    <div>
                        {[p1, p2].map((player) => (
                            <div
                                key={player.profile.id}
                            >
                                {JSON.stringify(player)}
                            </div>
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
