import React from 'react'

const UpdateProject = () => {
  return (
    <form>
      <input type='text' value='' placeholder='Updated Project Name' />
      <select type='dropdown' value='' placeholder='Choose a Subject' >
        <option value="">Math</option>
        <option value="">Science</option>
        <option value="">History</option>
        <option value="">Languages</option>
        <option value="">Literature</option>
      </select>
      <textarea type='text' value='' placeholder='Instructions & Notes' />
      <input type='file' id='image' />

    </form>
  )
}

export default UpdateProject;
