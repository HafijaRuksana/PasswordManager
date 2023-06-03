import './index.css'

// Math.round(Math.random() * 5)

// const colorsList =

const PasswordCard = props => {
  const {cardDetails, passwordShown, deleteCard} = props
  const {id, websiteName, userName, userPassword, bgClassName} = cardDetails

  const onDelete = () => deleteCard(id)

  return (
    <li className="card-item">
      <div className={`dp-container ${bgClassName}`}>
        <p className="count-text">{userName[0]}</p>
      </div>
      <div className="name-password-container">
        <p className="site-heading">{websiteName}</p>
        <p className="dp-text">{userName}</p>
        {passwordShown ? (
          <p className="site-heading">{userPassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <div className="image-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordCard
