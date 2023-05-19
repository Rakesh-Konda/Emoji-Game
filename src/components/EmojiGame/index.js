import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojisList: props.emojisList,
      score: 0,
      bestScore: 0,
      list: [],
      lossCard: 0,
      go: true,
      went: false,
    }
  }

  SetToStart = () => {
    this.setState({go: true, went: false, score: 0, list: []})
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.state
    const a = emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: a})

    this.setState(prevState => ({
      list: [...prevState.list, id],
    }))
    const {list} = this.state
    console.log(list)
    if (!list.includes(id)) {
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log('came')
      const {score} = this.state
      console.log(score)
      if (score === 11) {
        console.log('yes')
        this.setState({lossCard: 12})
        this.setState({bestScore: 12})
        this.setState({go: false})
        this.setState({went: true})
      }
    } else {
      const {score} = this.state
      this.setState({bestScore: score})
      this.setState({lossCard: score})
      this.setState({go: false})
      this.setState({went: true})
    }
  }

  render() {
    const {emojisList, score, bestScore, lossCard, go, went} = this.state
    return (
      <div>
        {go && (
          <div className="bg">
            <NavBar score={score} bestScore={bestScore} />
            <EmojiCard
              emojisList={emojisList}
              shuffledEmojisList={this.shuffledEmojisList}
            />
          </div>
        )}
        {went && (
          <WinOrLoseCard lossCard={lossCard} SetToStart={this.SetToStart} />
        )}
      </div>
    )
  }
}
export default EmojiGame
