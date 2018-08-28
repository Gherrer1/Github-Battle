import React from 'react';
import * as api from '../utils/api';
import Result from './Result';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import Loading from './Loading';

class BattleGround extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOneData: null,
            playerTwoData: null,
        };
    }

    componentDidMount() {
        let parsedQueryStr = queryString.parse(this.props.location.search);
        const p1Username = parsedQueryStr.playerOneName;
        const p2Username = parsedQueryStr.playerTwoName;
        api.battle([p1Username, p2Username])
            .then((profileDataArr) => {
                console.log(profileDataArr);
                if (profileDataArr === null) {
                    return this.setState({
                        error: `Looks like there was an error.
                            Make sure both users have githubs.
                        `,
                    });
                }
                profileDataArr[0].won = true;
                profileDataArr[1].won = false;
                this.setState({
                    playerOneData: profileDataArr[0],
                    playerTwoData: profileDataArr[1],
                });
            });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    {this.state.error}
                    <Link to='/battle'>Reset</Link>
                </div>
            );
        }
        let p1 = this.state.playerOneData;
        let p2 = this.state.playerTwoData;
        return (
            <div>
                {p1 && p2 ?
                    <div className="row">
                        {[p1, p2].map((player, index) => (
                            <Result
                                key={player.profile.id}
                                playerData={player}
                            />
                        ))}
                    </div>
                    :
                    <Loading intervalTime={75}/>
                }
            </div>
        );
    }
}

export default BattleGround;
