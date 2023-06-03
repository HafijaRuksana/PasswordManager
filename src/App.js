import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordCard from './PasswordCard'

import './App.css'

const classNames = ['yellow-bg', 'green-bg', 'red-bg', 'blue-bg', 'grey-bg']

class App extends Component {
  state = {
    inputWebsiteValue: '',
    inputNameValue: '',
    inputPasswordValue: '',
    websiteList: [],
    showPassword: false,
    searchInput: '',
  }

  addPasswordCard = event => {
    event.preventDefault()

    const colorClassName =
      classNames[Math.round(Math.random() * classNames.length)]

    const {
      inputWebsiteValue,
      inputNameValue,
      inputPasswordValue,
      websiteList,
    } = this.state

    const newCard = {
      id: uuidv4(),
      websiteName: inputWebsiteValue,
      userName: inputNameValue,
      userPassword: inputPasswordValue,
      bgClassName: colorClassName,
    }
    if (
      inputWebsiteValue !== '' &&
      inputNameValue !== '' &&
      inputPasswordValue !== ''
    ) {
      this.setState({
        websiteList: [...websiteList, newCard],
      })
    }
    this.setState({
      inputNameValue: '',
      inputPasswordValue: '',
      inputWebsiteValue: '',
    })
  }

  inputValueWebsite = event => {
    this.setState({inputWebsiteValue: event.target.value})
  }

  inputValueName = event => {
    this.setState({inputNameValue: event.target.value})
  }

  inputValuePassword = event => {
    this.setState({inputPasswordValue: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onClickDelete = id => {
    const {websiteList} = this.state
    const filteredCards = websiteList.filter(eachCard => eachCard.id !== id)
    this.setState({
      websiteList: filteredCards,
    })
  }

  selectedCards = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      inputNameValue,
      inputPasswordValue,
      inputWebsiteValue,
      websiteList,
      showPassword,
      searchInput,
    } = this.state
    const filteredCards = websiteList.filter(eachCard =>
      eachCard.websiteName.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-container">
        <div className="password-manager-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-logo"
          />
        </div>
        <form className="input-card">
          <div className="inputs-container">
            <h1 className="inputs-heading">Add New Password</h1>
            <div className="image-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logos"
              />
              <input
                type="text"
                value={inputWebsiteValue}
                placeholder="Enter Website"
                className="input-element"
                onChange={this.inputValueWebsite}
              />
            </div>
            <div className="image-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logos"
              />
              <input
                type="text"
                value={inputNameValue}
                placeholder="Enter Username"
                className="input-element"
                onChange={this.inputValueName}
              />
            </div>
            <div className="image-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logos"
              />
              <input
                type="password"
                value={inputPasswordValue}
                placeholder="Enter Password"
                className="input-element"
                onChange={this.inputValuePassword}
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="add-button"
                onClick={this.addPasswordCard}
              >
                Add
              </button>
            </div>
          </div>
          <div className="main-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="main-image"
            />
          </div>
        </form>
        <div className="passwords-card">
          <div className="passwords-and-search-container">
            <div className="password-count-container">
              <h1 className="count-heading">Your Passwords</h1>
              <div className="password-count">
                <p className="count-text">{filteredCards.length}</p>
              </div>
            </div>
            <div className="search-element-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                className="search-password-card"
                onChange={this.selectedCards}
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-password-container">
            <input type="checkbox" id="check" onClick={this.onShowPassword} />
            <label type="checkbox" htmlFor="check" className="label-show">
              Show Passwords
            </label>
          </div>
          {filteredCards.length === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          ) : (
            <ul className="ul-container">
              {filteredCards.map(eachCard => (
                <PasswordCard
                  key={eachCard.id}
                  cardDetails={eachCard}
                  passwordShown={showPassword}
                  deleteCard={this.onClickDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
