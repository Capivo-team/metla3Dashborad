let tokenName = 'lang'
const LangugeServices = {
  getLang: () => {
    return localStorage.getItem(tokenName)
  },

  setLang: (lang) => {
    return localStorage.setItem(tokenName, lang)
  },

  destroyLang: () => {
    return localStorage.removeItem(tokenName)
  },
}

export default LangugeServices
