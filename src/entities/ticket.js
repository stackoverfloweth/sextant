export class Ticket {
    id = ''
    key = ''
    status = ''
    priority = null
    summary = ''
    description = ''
    assignee = null
    creator = null
    storyPoints = -1
    comments = []
    attachments = []

    constructor(ticketData) {
        this.id = ticketData.id
        this.key = ticketData.key
        this.summary = ticketData.fields.summary
        this.description = ticketData.fields.description
        this.status = ticketData.fields.status.name
        this.priority = ticketData.fields.priority 
        this.storyPoints = ticketData.fields.customfield_10021

        if (ticketData.fields.assignee) {
            this.assignee = ticketData.fields.assignee
        }
        if (ticketData.fields.creator) {
            this.creator = ticketData.fields.creator
        }
        if (ticketData.fields.comment) {
            this.comments = ticketData.fields.comment.comments
        }
        // if (ticketData.fields.comment) {
        //     this.attachments = ticketData.comment.comments
        // }
    }
}