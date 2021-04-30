module.exports = {
    types: [
        'Phrase',
        'Requires Role',
        'Requires Administrator Privilege',
        'Send Channel Message',
        'Send Channel Message Embed',
        'Send in specific channel',
        'Send Private Message',
        'Send Private Message Embed',
        'React to received message',
        'Ignore error messages',
        'Require specfic message ID',
        'Delete id contains',
        'Delete command message after',
        'Delete X messages',
        'NSFW only',
        'Kick',
        'Ban',
        'Voice Mute',
        'Assign/Remove Role'
    ],
    search: [
        {
            name: 'phrase',
            description: 'Required with commands with certain keywords.',
            keywords: [
                '$messageAfterCommand',
                '$message',
                'Mentioned keywords'
            ]
        },
        {
            name: 'requires-role',
            aliases: [
                'requiresrole'
            ],
            description: 'Allows users that have the provided role.'
        },
        {
            name: 'requires-administrator-privilege',
            aliases: [
                'requiresadministratorprivilege',
                'rap'
            ],
            description: 'When enabled it only allows users with admin.'
        },
        {
            name: 'send-channel-message',
            aliases: [
                'sendchannelmessage',
                'scm'
            ],
            description: 'Sends a message to the channel the command was called in.'
        },
        {
            name: 'send-channel-message-embed',
            aliases: [
                'sendchannelmessageembed',
                'scme'
            ],
            description: 'Sends a message embed to the channel the command was called in.'
        },
        {

        }
    ]
}