// Write your code here
import './index.css'

const ListItems = props => {
  const {itemDetails, deleteItem} = props
  const {title, id} = itemDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <p className="list-details">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default ListItems
