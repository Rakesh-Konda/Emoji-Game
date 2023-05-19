// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, shuffledEmojisList} = props

  const change = id => {
    shuffledEmojisList(id)
  }

  return (
    <div>
      <ul className="ul">
        {emojisList.map(each => (
          <li key={each.id} className="li">
            <button className="bv" type="button">
              <img
                src={each.emojiUrl}
                className="i"
                onClick={() => change(each.id)}
                alt={each.emojiName}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default EmojiCard
