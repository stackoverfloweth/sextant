import React from 'react'
import { getPriorityColor } from '../shared/issue'

const BucketItem = ({ ticket, bucketHeightVh, maxStoryPoints, onClick }) => {
    const minHeight = 2.4
    const itemHeight = Math.round(((bucketHeightVh - 5) * (ticket.storyPoints / maxStoryPoints))) || minHeight
    const meetsMinHeight = itemHeight > minHeight

    return (
        <div className={`bucket-item status-${ticket.statusKey}`} style={{ height: `${meetsMinHeight ? itemHeight : minHeight}vh`, borderColor: getPriorityColor(ticket.priority.name) }} onClick={onClick}>
            <div className="ticket-points">{ticket.storyPoints}</div>
            <div className="ticket-key">{ticket.key}</div>
            {meetsMinHeight && <div className="ticket-status">[{ticket.status}]</div>}
            {meetsMinHeight && <div className='ticket-description'>{ticket.summary}</div>}
        </div>
    )
}

export default BucketItem