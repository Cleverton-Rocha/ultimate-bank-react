import { useState } from 'react'
import Cookies from 'js-cookie'

import { cn } from '../lib/utils'
import { useUser } from '../queries/user'

import TransactionToggle from './transaction-toggle'

const TransactionCard: React.FC = () => {
  const hashedCPF = Cookies.get('hashedCPF') ?? ''
  const { data } = useUser(hashedCPF)

  const [transactionType, setTransactionType] = useState<string>('Deposit')

  return (
    <>
      <div className="mt-8 flex h-[700px] flex-col gap-8 border-b  border-zinc-800 px-40 text-white">
        <h2 className="mb-4 text-2xl font-bold text-white">Transactions</h2>

        <TransactionToggle
          transactionType={transactionType}
          setTransactionType={setTransactionType}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {data?.account.transactions
            .filter((transaction) =>
              transactionType ? transaction.type === transactionType : true,
            )
            .map((transaction) => (
              <div
                key={transaction.id}
                className={cn(
                  'flex flex-col justify-between rounded-lg bg-lime-700 p-4 text-white shadow-lg',
                )}
              >
                <h1 className="mb-2 text-lg font-semibold">
                  {transaction.description}
                </h1>
                <span className="mb-2 block">Type: {transaction.type}</span>
                {transaction.to && (
                  <span className="mb-2 block">To: {transaction.to}</span>
                )}
                {transaction.from && (
                  <span className="mb-2 block">From: {transaction.from}</span>
                )}
                <span className="mb-2 block">
                  Amount: ${transaction.amount.toFixed(2)}
                </span>
                <span>
                  Date:{' '}
                  {new Date(transaction.transactionDate).toLocaleString(
                    'en-US',
                    {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    },
                  )}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default TransactionCard
