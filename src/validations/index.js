const isRequired = (val) => {
    return val.length > 0 ? '' : 'This field is required ';
}

function isEmail(val) {
    const ai = val.indexOf('@');
    const gdi = val
      .split('')
      .reduce((acc, char, i) => (char === '.' ? i : acc), 0);
    return ai > -1 && gdi > ai ? '' : 'must be an email';
  }

export {isRequired, isEmail};