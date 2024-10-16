const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '263715907468'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'miltonbrian45@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "263715907468"
global.devs = '263715907468';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hqQkMxajJQM3dOSUl3OXFOWXdhR0VVQ1l0a2JKejhlVnE1U3F1VEttaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZENm0zd3NiTXROc1NUWjVOZmVUSDBiNUZoRGxJVzlpM2Jxa3ZoMVUzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RlRSbTVHVUE0MjA0WUk4MDh3TEdaWjNqZ0EyQVEwSy9sN29HSzlSYm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSWdoZmQvNys5ZkFRV3dTUXN3TXVhWG9yYmZ5MmsvejZyN0JOdEo2bGdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBZjY1NVM5bTFQZmUwMkhxd214dkUzejc3SmQ4M3RhSzI0eVFhN0NmWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCbnFsWGM1dU9VWStCMVZ3ekNGang4QzBsaVk4ZDFRS1NzblphNmJzUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlBYk41QlVOWTErMmI3MGExVTFUenpsK2VMMDhtYUtPcjU5cjRDVHJXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblBWUUt4TGZOYm56YXVlMCtraXB4QlZCK1liQnFja0ZiVzV6eVpHNVNETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw1bThDQXNKMi9FTWNxSG9mT1Nhc0NNcXBPdStmNHR0NEx1OWkrMkJJSi9MY3I2T2dkSG12dkdsdStTVzU3cFB1K3VybEdoTWtPMGpad3dieWsvcWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IjZJNG1iUzlrUHNaeUo4d2RnUVN1NTYzQWoybVErV0E2eWVtRHh1VlVxdU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldhMW1CRHQ0VEd1N055MjQyY3g5ZXciLCJwaG9uZUlkIjoiNDAzZmM0NjgtOWNiMC00MzBlLWExYmMtZWE2YzBhMWVjZDZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkyZXlWc2VVRWlBV3djaXJPMURFaEI5ajJGZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS2NZTTdWcmRsQXIwN1ptNEI5WDVrRGtrbm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlJCRFRRWjEiLCJsYXN0UHJvcEhhc2giOiIyOFpSbGEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sIm1lIjp7ImlkIjoiNTIxOTYyNTE1ODQ3MToxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIoxYLwnZCM8J2QmvCdkJ/wnZCi8J2QmiDOlCDwnZWv8J2VrfCdlbspIiwibGlkIjoiMTUwOTYwMDMwNjQ2NDI3OjE3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHp4b29NREVNVGN3TGdHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMjdCMTZ3aDFyNGxNaXE2WTdQYWt2VnBFUnhzR3FHUUR1OEpEN3dua05uVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKzdoQVFEYTBNKzd5c1E0YkU5a0pmUStWZXFvNnhZY0J5Q1lsTmtTZGYxeTNhcWQ1OUNYUGxnWHZ6bDV4R2dYbE9tcHVhTTVsdHBOT2tKS25BWkZ1QWc9PSIsImRldmljZVNpZ25hdHVyZSI6IllmT2RuK011dTIyTjVEbnk0TkpIaVlMT0FXOXIzWEVCcFpLTGc2cUNIUTRzT0NFczZINzFQT2Y4ZytKVDdWT25tbWdxTy9QUEcrcmRoelBIOFczbmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTIxOTYyNTE1ODQ3MToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdXdkZXNJZGErSlRJcXVtT3oycEwxYVJFY2JCcWhrQTd2Q1ErOEo1RFoxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MTEzNjcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURISiJ9| "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZFckJMSi9CRzFxamh1azhJMzZXT1lyd3lSTDg5aDBDMFhwUG9tVVZIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGYzejYwZWhhb2NLWExQODMyY2pmYWFOZlYrdHhNZmJiSC9vcm5EQ0t3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TXQ0Q3NydEZEUkI4V0lLNTRtM2ZrWHF5WEhhWVFOMG44WGdaUlZyOEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdHl1RFVWdVJQNWJyYkZQNVpRdkhoZ1RtMlNFZHZ1OUdzRVNqeHpRZ0U0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMc3lXaE1NNDZLN0ZWVEJKT1pVM2JQUHY0alhDSnpZc25lUzZpUlR5VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ5eGcrVHRvamlwL0dPNjJnY3BPS0xLMis4Y1lnc3ZLNFk1aHA3VkZVQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR1WTNxdTd4VHdNTjJ4UFhlRjBuRjVlZDY0MzRmeVU3QnY4OXB4L1IxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3hZUE16bTYwcjBBYWJBcEVmOUFzQ2xMMVR3T1hPNkNIK2VFeC9NVWpIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKMm9JMWs0VUVqaU1jYnVNMXBrRXVydzd6QjUrcGVJMk9NY3kyRXh5MGRCWG4yMjlIK0ovd0pwTG96WDh6S090RnVQYUFIZ1B4TkV4U2RiSlVCNUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJVdUhnSlMzdGsxdzBtSUd4QU1BMmwvZjMyWWdrcWZHWTVRWFdSV3ZXQ284PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUNkVRa0dwR1NaT0I4YjRzdmxUS21RIiwicGhvbmVJZCI6IjI5NmIzNDNkLTNhMWMtNDFhNy1hYTUyLWIyMTYxOGJjODFkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMUJVUDRYSngxV3FhdEQ1YVhqM1ZYdDBUNUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImoxV1dldUxIcG5HRGR6S0ZialpiakF1Zm02az0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ucCtQQUNFSjZvcmJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVISFN3Mm1wTVZjU1c0Tk1OUzNkK3FjdVl3eXY0bUVxanNGSVhhNkJTejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkYvTCt4a08vNmJqb1lhWjZ0OHQ3VG9ra2JML2JBWlZmYmR1WW5pUVFmVENuQVNncWdyWENkR0tVbE1neS9NQkR2MTFPTEtiS2wzUzU4WlNLSFJKaERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0dEc4V1NyZkczeS9qYmJScUZFblk2K2h2SW03THNvRENsazhYb3gwUjZLaEU3ZnJsR21wV3ZVNTdOMmJZV1ZDaW1xeU0xTDVrWWNlRmROMzVyMmpDdz09In0sIm1lIjp7ImlkIjoiMjYzNzEyMTk2MTUyOjk3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMjE5NjE1Mjo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiaHgwc05wcVRGWEVsdURURFV0M2ZxbkxtTU1yK0poS283QlNGMnVnVXMrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTA0MjUwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUptNSJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'Miltom Technologies',
  
  botname:   process.env.BOT_NAME === undefined ? "MILTON-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*MILTON technologies* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'MILTON-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
