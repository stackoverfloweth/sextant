export class Member {
    emailAddress = ''
    active = false
    displayName = ''
    avatar = ''
    color = ''
    
    constructor(memberData) {
        this.active = memberData.active
        this.emailAddress = memberData.emailAddress
        this.displayName = memberData.displayName
        this.avatar = memberData.avatarUrls['48x48']
        this.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
}