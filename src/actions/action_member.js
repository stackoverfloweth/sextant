export const MEMBER_EDIT = {
    BEGIN: 'MEMBER_EDIT_BEGIN',
    CHANGE: 'MEMBER_EDIT_CHANGE',
    CANCEL: 'MEMBER_EDIT_CANCEL',
    COMPLETE: 'MEMBER_EDIT_COMPLETE',
}

export const MEMBER_INSERT = {
    REQUEST: 'MEMBER_INSERT_REQUEST',
    RESPONSE: 'MEMBER_INSERT_RESPONSE',
};
export const MEMBER_UPDATE = {
    REQUEST: 'MEMBER_UPDATE_REQUEST',
    RESPONSE: 'MEMBER_UPDATE_RESPONSE',
}

export const addNewTeamMember = payload => ({ type: MEMBER_INSERT.REQUEST, member: payload })
export const recievedNewTeamMember = payload => ({ type: MEMBER_INSERT.RESPONSE, member: payload })

export const updateTeamMember = payload => ({ type: MEMBER_UPDATE.REQUEST, member: payload })
export const recievedUpdatedTeamMember = payload => ({ type: MEMBER_UPDATE.RESPONSE, member: payload })

export const beginEditingTeamMember = payload => ({ type: MEMBER_EDIT.BEGIN, member: payload })
export const setEditingTeamMemberValues = (property, value) => ({ type: MEMBER_EDIT.CHANGE, property, value })
export const cancelEditingTeamMember = payload => ({ type: MEMBER_EDIT.CANCEL, member: payload })
export const completeEditingTeamMember = payload => ({ type: MEMBER_EDIT.COMPLETE, member: payload })