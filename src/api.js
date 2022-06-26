export const getInvoicesPaid = () => Promise.resolve({
  data: [
    {
      id: '000004',
      name: 'Molly Sanders',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      amount: '$20,000',
      currency: 'USD',
      issued_date: 'Sept 28, 2019',
      due_date: 'Due in 3 days',
      status: 'Paid',
    },
    {
      id: '000003',
      name: 'Michael Roberts',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      amount: '$214,000',
      currency: 'USD',
      issued_date: 'Sept 25, 2019',
      due_date: 'Due in 6 days',
      status: 'Paid',
    }
  ]
})

export const getInvoicesExtra = () => Promise.resolve({
  data: [
    {
      id: '000002',
      name: 'Devin Childs',
      avatar: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      amount: '$314,000',
      currency: 'USD',
      issued_date: 'Sept 15, 2019',
      due_date: 'Due in 4 days',
      status: 'Pending',
    },
    {
      id: '000001',
      name: 'Frederick Nicholas',
      avatar: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
      amount: '$114,000',
      currency: 'USD',
      issued_date: 'Sept 6, 2019',
      due_date: 'Due 3 weeks ago',
      status: 'Overdue',
    }
  ]
})