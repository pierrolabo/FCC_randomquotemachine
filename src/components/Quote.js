import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuotes } from '../actions/updateQuoteAction';

class Quote extends Component {
  getRandomQuote = () => {
    let randomNbr =
      Math.floor(Math.random() * (this.props.quotes.length - 0)) + 0;
    return this.props.quotes[randomNbr];
  };
  handleClick = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        this.props.updateQuotes(data);
      });
  };
  render() {
    let quote = this.getRandomQuote();
    return (
      <div className='quoteContainer'>
        <div className='quoteCard' id='quote-box'>
          <div className='quoteCard-text' id='text'>
            " {quote.text} "
          </div>
          <div className='quoteCard-author' id='author'>
            - {quote.author}
          </div>
          <div className='buttons'>
            <a
              href={'https://twitter.com/intent/tweet?text=' + quote.text}
              id='tweet-quote'
              target='_blank'
            >
              <i className='fa fa-twitter-square fa-3x'></i>
            </a>
            <button id='new-quote' onClick={this.handleClick}>
              New Quote!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuotes: (quotes) => {
      dispatch(updateQuotes(quotes));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Quote);
