const initState = {
  quotes: [
    {
      text:
        'Genius is one percent inspiration and ninety-nine percent perspiration.',
      author: 'Thomas Edison',
    },
    {
      text: 'You can observe a lot just by watching.',
      author: 'Yogi Berra',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'UPDATE_QUOTES') {
    return {
      ...state,
      quotes: action.quotes,
    };
  }
  return state;
};

export default rootReducer;
