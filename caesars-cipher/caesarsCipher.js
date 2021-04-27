function rot13(str) {
  const decodeCipher = (match) => {
    const charAscii = match.charCodeAt(0);
    return (charAscii > 77) 
      ? String.fromCharCode(charAscii - 13)
      : String.fromCharCode(charAscii + 13);
  }

  return str.replace(/[A-Z]/g, decodeCipher);
}

module.exports = rot13;
