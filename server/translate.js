const { Translate } = require('@google-cloud/translate');
const translate = new Translate();

// Imports the Google Cloud client library
process.env.GOOGLE_APPLICATION_CREDENTIALS = process.env.TRANSLATE_CONFIG || '/etc/compute.json';

const translateFacade = (text, from, to) => {
  if (process.env.REAL_TRANSLATE) {
    return realTranslate(text, from, to);
  }
  return fakeTranslate(text, from, to);
}

const fakeTranslate = (text, from, to) => {
  
  return Promise.resolve([
      `${text} in ${to}`, {"data":
      {
        "translations":[{
          "translatedText":text,
          "model":"nmt"
        }]
      }}
  ]);
}

const realTranslate = (text, from, to) => {
  console.log("I AM COSTING YOU MONEY, Mate !");
  const options = { format: 'text', from: from, model: 'nmt', to: to}
  console.log("Options: ", options);
  return translate.translate(text, options)
};


module.exports = {
  translate: translateFacade
}