import React from 'react';
import PropTypes from 'prop-types';
import ReposList from './ReposList';
import Loading from './Loading';
import {fetchPopularRepos} from '../utils/api';

function SelectLanguage(props) {
  return (
    <div>
      <ul className="languages">
        {props.languages.map((lang) =>
          (
            <li
              key={lang}
              style={lang === props.activeLang ? {color: '#d0021b'} : null }
              onClick={ () => props.handleClick(lang) } >
              {lang}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
SelectLanguage.propTypes = {
  languages: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  activeLang: PropTypes.string.isRequired,
};

class Popular extends React.Component {
  state = {
    selectedLang: 'All',
    repos: null,
  }
  /* Sets initial state of the component */
  constructor(props) {
    super(props);

    this.updateSelectedLang = this.updateSelectedLang.bind(this);
  }

  componentDidMount() {
    this.updateSelectedLang(this.state.selectedLang);
  }

  updateSelectedLang = (lang) => {
    this.setState({
      selectedLang: lang,
      repos: null,
    });
    fetchPopularRepos(lang)
      .then((repos) => this.setState({repos}));
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    const {selectedLang, repos} = this.state;
    return (
      <div>
        <SelectLanguage
          languages={languages}
          handleClick={this.updateSelectedLang}
          activeLang={selectedLang}
        />
        {
          !repos ?
          <Loading text='DOWNLOADING' intervalTime={100} />
            :
          <ReposList repos={repos} />
        }
      </div>
    );
  }
}

export default Popular;
