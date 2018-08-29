import React from 'react'

const BucketItem = ({ ticket, bucketHeightVh, maxStoryPoints, onClick }) => {
    const minHeight = 2.2
    const itemHeight = Math.round(((bucketHeightVh - 5) * (ticket.storyPoints / maxStoryPoints))) || minHeight
    const meetsMinHeight = itemHeight > minHeight

    return (
        <div className='bucket-item' style={{ height: `${meetsMinHeight ? itemHeight : minHeight}vh` }} onClick={onClick}>
            <div className="bucket-item-content">
                <span className="ticket-key">{ticket.key}</span>
                {meetsMinHeight && <span className='ticket-description'>{ticket.summary}</span>}
            </div>
        </div>
    )
}

export default BucketItem