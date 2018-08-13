import React from 'react'

const TicketTitle = (ticket) => (
    <div>
        <img alt='priority' width='14px' src={ticket.priority.iconUrl} />
        <a href={`https://itscompliance.atlassian.net/browse/${ticket.key}`} target='_blank'>
            {ticket.key}
        </a>
        <p className='ticket-description'>{ticket.summary}</p>
    </div>
)


const SmallTicketTitle = (ticket) => (
    <a className='small-bucket-item' href={`https://itscompliance.atlassian.net/browse/${ticket.key}`} target='_blank' > </a>
)

const BucketItem = ({ ticket, bucketHeightVh, maxStoryPoints }) => {
    const itemHeightVh = Math.round(((bucketHeightVh-5) * (ticket.storyPoints / maxStoryPoints))) || 0.5

    return (
        <div className='bucket-item bubble-background' style={{ height: `${itemHeightVh}vh` }}>
            <span className='ticket-link'>
            {/* {itemHeightVh}/{bucketHeightVh} - {ticket.storyPoints} / {maxStoryPoints} */}
                {itemHeightVh > 2
                    ? TicketTitle(ticket)
                    : SmallTicketTitle(ticket)}
            </span>
        </div>
    )
}

export default BucketItem