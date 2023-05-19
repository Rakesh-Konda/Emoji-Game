// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {lossCard, SetToStart} = props

  const url =
    lossCard === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const text = lossCard === 12 ? 'You Won' : 'You Lose'
  const paraText = lossCard === 12 ? 'Best Score' : 'Score'
  const alt = 'win or lose'

  const PlayAgain = () => {
    SetToStart()
  }

  return (
    <div className="bg1">
      <nav className="hlo">
        <div className="cen">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <p className="pp">Emoji Game</p>
        </div>
      </nav>
      <div className="c">
        <div className="card">
          <div className="gar">
            <h1 className="ll">{text}</h1>
            <p className="ll">{paraText}</p>
            <p className="hh">{lossCard}/12</p>
            <button type="button" className="butt" onClick={PlayAgain}>
              Play Again
            </button>
          </div>
          <img src={url} className="img" alt={alt} />
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard
