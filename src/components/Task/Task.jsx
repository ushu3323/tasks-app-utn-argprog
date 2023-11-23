import './Task.css'

export default function Task({ title, status, onStatusChange, onDelete}) {
  return (
    <>
      <tr className='task-list__tr'>
        <td className='task-list__td'>{title}</td>
        <td className='task-list__td'>
          <button
            className="button-status"
            onClick={() => onStatusChange()}
          >{status ? 'Completed' : 'Pending'}</button>
        </td>
        <td className='task-list__td'>
          <button
            className='button-delete'
            onClick={() => onDelete()}
          >
            <img src='public/delete.svg'></img>
          </button>
        </td>
      </tr>
    </>
  )
}