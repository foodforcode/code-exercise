const chunkMail = (mail, limit = 6) => {
  let mailChunks = [];
  console.log('chunking mail')
  for(let i = 0; i < mail.length; i+=limit) {
    mailChunks.push(mail.slice(i, i + limit))
  }
  return mailChunks;
}

module.exports = chunkMail;