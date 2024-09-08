import React from 'react'
import DraftItem from './components/DraftItem'

const Draft = ({drafts}) => {
  if(!drafts) return <div>No drafts exists</div>;

  console.log(drafts)

  return (
    <div className="draft-container">
    <div className="draft-inner">
      {drafts.map((draft) =>(
        <DraftItem key={draft.id} draft={draft}/>
      ))}   
    </div>
  </div>
  )
}

export default Draft