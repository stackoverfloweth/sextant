import React from 'react'

const BucketItem = ({ ticket, bucketHeightVh, maxStoryPoints, onClick }) => {
    const minHeight = 2.4
    const itemHeight = Math.round(((bucketHeightVh - 5) * (ticket.storyPoints / maxStoryPoints))) || minHeight
    const meetsMinHeight = itemHeight > minHeight

    return (
        <div className='bucket-item' style={{ height: `${meetsMinHeight ? itemHeight : minHeight}vh` }} onClick={onClick}>
            <div className="ticket-key">{ticket.key}</div>
            {meetsMinHeight && <div className='ticket-description'>{ticket.summary}</div>}
        </div>
    )
}

export default BucketItem