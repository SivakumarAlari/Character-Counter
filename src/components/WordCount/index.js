import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import WordItem from '../WordItem'
import './index.css'

class WordCount extends Component {
  state = {searchInput: '', wordsLists: []}

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  createWordList = event => {
    const {searchInput} = this.state
    event.preventDefault()
    const newWord = {
      id: uuidv4(),
      name: searchInput,
      nameLength: searchInput.length,
    }
    this.setState(prevState => ({
      wordsLists: [...prevState.wordsLists, newWord],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsLists} = this.state
    const inputLength = wordsLists.length === 0
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="yellow-container">
            <h1 className="count-Character">
              Count the characters like a Boss
            </h1>
            {inputLength ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="empty-image"
                />
              </div>
            ) : (
              <ul>
                {wordsLists.map(eachWord => (
                  <WordItem key={eachWord.id} wordDetails={eachWord} />
                ))}
              </ul>
            )}
          </div>
          <div className="black-container">
            <h1 className="character-heading">Character Counter </h1>
            <form onSubmit={this.createWordList}>
              <input
                type="text"
                onChange={this.onChangeSearchValue}
                value={searchInput}
                placeholder="Enter the Characters here"
                className="inputDesign"
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default WordCount
