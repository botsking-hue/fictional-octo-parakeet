// CMD: cancel
// WAIT: NO

const user = ctx.user
const chat = ctx.chat

// Clear any pending operation data
user.props.currentOperation = null
user.props.tempGmailData = null
user.props.tempWithdrawalData = null
user.save()

chat.sendText(`❌ *Operation Cancelled*

All pending inputs have been cleared. Returning to main menu.`, {
  parseMode: 'markdown'
})

// Return to main menu after short delay
Bot.run({
  command: 'main_menu',
  run_after: 1000 // 1 second delay
})
