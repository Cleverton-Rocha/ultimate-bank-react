import React from 'react'

import { cn } from '../lib/utils'

type TransactionToggleProps = {
  transactionType: string
  setTransactionType: (transactionType: string) => void
}

const TransactionToggle: React.FC<TransactionToggleProps> = ({
  transactionType,
  setTransactionType,
}) => {
  const toggleTransactionType = (type: string) => {
    setTransactionType(type)
  }

  return (
    <div className="flex gap-5 text-lg">
      <button
        className={cn(
          'font-semibold transition duration-200 hover:text-lime-700',
          transactionType === 'Deposit' && 'font-semibold text-lime-600',
        )}
        onClick={() => toggleTransactionType('Deposit')}
      >
        Deposit
      </button>
      <button
        className={cn(
          'font-semibold transition duration-200 hover:text-lime-700',
          transactionType === 'Withdraw' && 'font-semibold text-lime-600',
        )}
        onClick={() => toggleTransactionType('Withdraw')}
      >
        Withdraw
      </button>
      <button
        className={cn(
          'font-semibold transition duration-200 hover:text-lime-700',
          transactionType === 'Transfer' && 'font-semibold text-lime-600',
        )}
        onClick={() => toggleTransactionType('Transfer')}
      >
        Transfer
      </button>
    </div>
  )
}

export default TransactionToggle
