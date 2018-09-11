import React from 'react'

const BucketItem = ({ ticket, bucketHeightVh, maxStoryPoints, onClick, onDragStart, onDragEnd }) => {
    const minHeight = 2.4
    const itemHeight = Math.round(((bucketHeightVh - 5) * (ticket.storyPoints / maxStoryPoints))) || minHeight
    const meetsMinHeight = itemHeight > minHeight

    return (
        <div className={`bucket-item status-${ticket.statusKey}`}
            style={{ height: `${meetsMinHeight ? itemHeight : minHeight}vh` }}
            onClick={onClick}
            draggable="true"
            onDragStart={(e) => onDragStart(e, ticket.key)}
            onDragEnd={(e) => onDragEnd(e, ticket.key)}
        >

            <div className="ticket-points">{ticket.storyPoints}</div>
            <div className="ticket-key">{ticket.key}</div>
            {meetsMinHeight && <div className="ticket-status">[{ticket.status}]</div>}
            {meetsMinHeight && <div className='ticket-description'>{ticket.summary}</div>}
        </div>
    )
}

export default BucketItem