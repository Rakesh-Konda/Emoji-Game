// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, bestScore} = props

  return (
    <div>
      <nav className="hlo">
        <div className="cen">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="pp">Emoji Game</h1>
        </div>
        <div className="cen1">
          <p className="pp">Score: {score}</p>
          <p className="pp">Top Score: {bestScore}</p>
        </div>
      </nav>
    </div>
  )
}
export default NavBar
