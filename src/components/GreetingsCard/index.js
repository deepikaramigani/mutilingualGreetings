import './index.css'

const GreetingsCard = props => {
  const {eachObject, activeTab, onclick} = props
  const {id, buttonText} = eachObject
  const buttonStyle = id === activeTab ? 'active-tab' : ''

  const onClickButton = () => {
    onclick(id)
  }

  return (
    <li className="button-container">
      <button
        type="button"
        onClick={onClickButton}
        className={`button ${buttonStyle}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingsCard
