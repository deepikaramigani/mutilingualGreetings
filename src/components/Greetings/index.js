import {Component} from 'react'

import GreetingCard from '../GreetingsCard'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  onClickItem = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state
    const imgObject = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )
    const {imageUrl, imageAltText} = imgObject[0]

    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(each => (
            <GreetingCard
              eachObject={each}
              key={each.id}
              activeTab={activeTabId}
              onclick={this.onClickItem}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} className="img" />
      </div>
    )
  }
}

export default Greetings
