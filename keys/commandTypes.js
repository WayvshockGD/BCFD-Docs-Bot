module.exports = {
    types: [
        "Message-Receive",
        "Private-Message",
        "Member-Join",
        "Member-Leave",
        "Member-Ban",
        "Reaction-Add",
    ],
    search: [
        {
            name: 'messagereceive',
            fname: 'Message Receive',
            description: 'Activated on message recieive.',
            presenceintent: false
        },
        {
            name: 'privatemessage',
            fname: 'Private Message',
            description: 'Activated when a user talks in the bots dms.',
            presenceintent: true
        },
        {
            name: 'memberjoin',
            fname: 'Member Join',
            description: 'Activated when a member joins the server.',
            presenceintent: true
        },
        {
            name: 'memberleave',
            fname: 'Member Leave',
            description: 'Actived when a member leaves the server.',
            presenceintent: true
        },
        {
            name: 'memberban',
            fname: 'Member Ban',
            description: 'Activated when a user gets banned.',
            presenceintent: true
        },
        {
            name: 'reactionadd',
            fname: 'Reaction Add',
            description: 'activated when a user reacts to a specific emote.',
            presenceintent: true
        }
    ]
}