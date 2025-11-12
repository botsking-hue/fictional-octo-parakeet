// CMD: ask_gmail_address
// WAIT: YES

const user = ctx.user
const chat = ctx.chat

// Update temp data
const tempData = JSON.parse(user.props.tempGmailData || "{}")
tempData.step = "awaiting_email"
user.props.tempGmailData = JSON.stringify(tempData)
user.save()

chat.sendText(`📧 *Step 1: Gmail Address*

Please enter the Gmail address:
• Must be a valid @gmail.com address
• Must be active and accessible
• Example: yourname@gmail.com

*Type your Gmail address below:*`, {
  parseMode: 'markdown',
  buttons: [
    [{ text: '❌ Cancel Submission', callback: 'cancel' }]
  ]
})
