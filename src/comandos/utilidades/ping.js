module.exports = {
name: "ping",
aliases: ['latência', 'latencia', 'pong', 'node'],
code: `
$reply[$messageID;false]
Pong! 🏓
$editIn[3s;Latência Api: $pingms
Mensagem Ping : $messagePingms
Último Restart: <t:$truncate[$divide[$readyTimestamp;1000]]:f>]
`
}