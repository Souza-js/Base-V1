module.exports = {
name: "eval",
aliases: ['evl', 'eva', 'ev', 'e'],
code: `
$eval[$message]
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
`
}