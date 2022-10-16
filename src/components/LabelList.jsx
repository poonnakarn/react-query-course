import { useLabelsDatas } from '../helpers/useLabelsData'

export default function LabelList({ selected, toggle }) {
  const labelsQuery = useLabelsDatas()

  return (
    <div className='labels'>
      <h3>Labels</h3>
      {labelsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {labelsQuery.data.map((label) => (
            <li key={label.id}>
              <button
                className={`label ${
                  selected.includes(label.id) ? 'selected ' : ''
                } ${label.color}`}
                onClick={() => toggle(label.id)}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
