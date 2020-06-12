import React, { useRef, useState } from 'react'

const TagsInput = () => {
  const [tags, setTags] = useState([])
  const tagInput = useRef(null)

  const removeTag = (i) => setTags((t) => t.slice(0, i))

  const inputKeyDown = (e) => {
    const val = e.target.value.trim()
    if (e.key === ' ' && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return
      }
      setTags([...tags, val])
      tagInput.current.value = null
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1)
    }
  }

  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(i)
              }}
            >
              +
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input type="text" onKeyDown={inputKeyDown} ref={tagInput} />
        </li>
      </ul>
    </div>
  )
}

export default TagsInput
