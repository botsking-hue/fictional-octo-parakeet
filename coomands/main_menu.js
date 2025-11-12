// CMD: main_menu
// WAIT: NO

const user = ctx.user
const chat = ctx.chat

// Get updated stats
const userGmails = JSON.parse(user.props.gmails || "[]")
const approvedCount = userGmails.filter(g => g.status === "approved").length
const pendingCount = userGmails.filter(g => g.status === "pending").length
const earnings = approvedCount * 50

const menuText = `
🏠 *Main Menu*

📊 *Your Stats:*
• 📧 Gmail Accounts: ${userGmails.length}
• ✅ Approved: ${approvedCount}
• ⏳ Pending: ${pendingCount}
• 💰 Earnings: Ksh ${earnings}

🤖 *What would you like to do?*
`

const buttons = [
  [
    { text: '📧 Submit Gmail', callback: 'submit_gmail_start' },
    { text: '📊 My Statistics', callback: 'my_statistics' }
  ],
  [
    { text: '💰 Withdraw Funds', callback: 'withdrawal_start' },
    { text: '📨 My Gmail Accounts', callback: 'my_gmail_accounts' }
  ],
  [
    { text: '💸 My Withdrawals', callback: 'my_withdrawals' },
    { text: '❓ How It Works', callback: 'how_it_works' }
  ]
]

// Add admin button if user is admin
if (user.props.isAdmin) {
  buttons.push([
    { text: '🛠️ Admin Panel', callback: 'admin_panel' }
  ])
}

chat.sendText(menuText, { 
  parseMode: 'markdown',
  buttons: buttons
})
