// import { type ClassValue, clsx } from 'clsx'
// import { twMerge } from 'tailwind-merge'

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

export const formatCPF = (CPF: string) => {
  let value = CPF.replace(/\D/g, '')
  value = value.slice(0, 11)

  if (value.length > 3 && value.length <= 6) {
    value = `${value.slice(0, 3)}.${value.slice(3)}`
  } else if (value.length > 6 && value.length <= 9) {
    value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`
  } else if (value.length > 9) {
    value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`
  }
  return value
}

export const handleCPFInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const CPF = e.target
  CPF.value = formatCPF(CPF.value)
}

export const formatAmount = (amount: string) => {
  let value = amount.replace(/\D/g, '')
  value = `$${value.slice(0, 6)}`

  if (value.length > 3) {
    value = `${value.slice(0, -3)}.${value.slice(-3)}`
  }
  return value
}

export const handleAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const amount = e.target
  amount.value = formatAmount(amount.value)
}

export const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const name = e.target
  name.value = name.value.replace(/[0-9]/g, '')
}
