module.exports = [
    { 
        name: '$name', 
        description: 'Inserts a mention of whoever called the command.', 
        format: '@user' 
    },
    { 
        name: '$avatar', 
        description: 'Inserts a URL of the command caller.' 
    },
    { 
        name: '$defaultAvatar', 
        description: 'Inserts a Default user avatar of the command caller.' 
    },
    { 
        name: '$namePlain', 
        description: 'Inserts a plain username (not mention) of the user.', 
        format: 'user' 
    },
    { 
        name: '$discriminator', 
        description: 'Inserts a users discrim of whoever called the command.', 
        format: '#1234' 
    },
    { 
        name: '$tag', 
        description: 'Inserts a username from the command caller', 
        format: 'username#1234' 
    },
    { 
        name: '$ID', 
        description: 'Inserts the command callers userID', 
        format: '1234567+' 
    },
    { 
        name: '$serversSharedWithBot', 
        description: 'Inserts the client guild count.' 
    },
    { 
        name: '$timeCreated', 
        description: 'Inserts the users created time. (shows a time when created)', 
        format: 'year-day-etc' 
    },
    {
        name: '$mentionedName',
        description: 'Inserts a mention of the mentioned user.',
        format: '@user'
    },
    {
        name: '$mentionedAvatar',
        value: "Inserts the mentioned user's avatarURL."
    },
    {
        name: '$mentionedDefaultAvatar',
        description: 'Inserts a default avatarURL of the mentioned user.'
    },
    {
        name: '$mentionedNamePlain',
        description: 'Inserts a plain text of the mentioned user. (same as $namePlain)',
        format: 'user'
    },
    {
        name: '$mentionedDiscriminator',
        description: "Inserts the mentioned user's disrim."
    },
    {
        name: '$mentionedTag',
        description: "Inserts the mentioned user's username and tag",
        format: 'username#1234'
    },
    {
        name: '$mentionedID',
        description: "Inserts the mentioned user's user id."
    },
    {
        name: '$mentionedServersSharedWithBot',
        description: 'A number of guilds that the mentioned and bot shares.'
    },
    {
        name: '$mentionedTimeCreated',
        description: 'Inserts the accounts created time. (same as $timeCreated)',
        format: 'year-day-etc'
    },
    {
        name: '$botName',
        description: 'Inserts the bots name.',
        format: 'bots-username'
    },
    {
        name: '$botAvatar',
        description: 'Inserts the bots avatarURL.'
    },
    {
        name: '$botDefaultAvatar',
        description: 'Inserts a url of the bots default url.'
    },
    {
        name: '$botNamePlain',
        description: 'Inserts the plain username of the bot.',
        format: 'name'
    },
    {
        name: '$botDiscriminator',
        description: 'Inserts the bots discrim.',
        format: '#1234'
    },
    {
        name: '$botTag',
        description: 'Inserts the bots username and discrim.',
        format: 'bot_username#1234'
    },
    {
        name: '$botID',
        description: 'Inserts the clients own User / Client ID.',
        format: '123456789+'
    },
    {
        name: '$botTimeCreated',
        description: "Inserts the client's created time. (when it was created)"
    },
    {
        name: '$server',
        description: 'Inserts the servers name.',
        format: 'server_name'
    },
    {
        name: '$serverCount',
        description: 'Inserts the number of guilds the client is in.',
        returns: 'Number'
    },
    {
        name: '$memberCount',
        description: "Inserts the member count the client can see in the current guild.",
        returns: 'Number'
    },
    {
        name: '$allMemberCount',
        description: 'Inserts a number of users the client can see.',
        returns: 'Number'
    },
    {
        name: '$serverIcon',
        description: 'Inserts a url of the guilds icon',
        returns: 'URL'
    },
    {
        name: '$serverBanner',
        description: 'Inserts the guilds URL banner.',
        returns: 'URL'
    },
    {
        name: '$serverDescription',
        description: 'Inserts the current guilds description. (returns nothing if not found.)',
    },
    {
        name: '$serverSplash',
        description: "Inserts the guild's splash URL.",
        returns: 'URL'
    },
    {
        name: '$channel',
        description: 'Inserts the channels name in the message.',
        format: '<#channel> or channel',
        returns: 'String'
    },
    {
        name: '$channelID',
        description: 'Inserts the current channel id.'
    },
    {
        name: '$channelCreateDate',
        description: 'Inserts the channels created date.',
        returns: 'Date',
        format: 'some_date | year-date-etc'
    },
    {
        name: '$channelAsMention',
        description: 'Inserts the channels mention.',
        format: '<#channel>',
        returns: 'String'
    },
    {
        name: '$message',
        description: 'Inserts the whole message of the command.',
        returns: 'String | Message',
        format: '<prefix><command> message'
    },
    {
        name: '$messageAfterCommand',
        description: 'Inserts the message after the command. (not like $message)',
        returns: 'Message | String',
        format: 'message'
    },
    {
        name: '$eval',
        description: 'Start of javascript code.',
        returns: 'Javascript | Error (if that happens)'
    },
    {
        name: '$halt',
        description: 'The end of javascript code.',
        returns: 'Javascript | Error'
    },
    {
        name: '$get',
        params: '(name)',
        description: 'Gets a value from a javascript variable.',
        returns: 'Get'
    },
    {
        name: '$set',
        params: '(name,value)',
        description: 'Sets a value onto a js variable.',
        returns: 'Insert | Can reset when rehosted.'
    },
    {
        name: '$date',
        description: 'Gets the current date',
        returns: 'Date',
        format: 'year-date-etc'
    },
    {
        name: '$random',
        params: '{value|value|value|etc}',
        description: 'Gets a random thing from the keyword.',
        returns: 'Values'
    },
    {
        name: '$sum',
        params: '{number|number|etc}',
        description: 'Adds anything in the keyword params.',
        returns: 'Number'
    },
    {
        name: '$commandCount',
        description: 'Inserts the clients command count.',
        returns: 'Number'
    },
    {
        name: '$rollnum',
        params: '(min,max)',
        description: 'Inserts a random number from the param.',
        returns: 'Number'
    },
    {
        name: '$ping',
        description: 'Inserts the client gateway ping.'
    },
    {
        name: '$inviteURL',
        description: 'Inserts the clients inviteURL',
        returns: 'URL'
    }
]