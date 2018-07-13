export class Ticket {
    id = ''
    key = ''
    status = ''
    priority = null
    summary = ''
    assignee = null
    creator = null
    storyPoints = -1

    constructor(ticketData) {
        this.id = ticketData.id
        this.key = ticketData.key
        this.summary = ticketData.fields.summary
        this.status = ticketData.fields.status.name
        this.priority = ticketData.fields.priority
        if (ticketData.fields.assignee) {
            this.assignee = ticketData.fields.assignee
        }
        if (ticketData.fields.creator) {
            this.creator = ticketData.fields.creator
        }
        this.storyPoints = ticketData.fields.customfield_10021
    }
}