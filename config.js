const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=KrgQEJbQ#eOC6MmI5RG65Y4EMrnnoycg2s4cyxMLMqtsdcfGvUsk",
MONGODB: process.env.MONGODB || "mongodb+srv://imeshnewhotmail:
2WTp4IQxmGDniqJX@cluster0.uhscl.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
