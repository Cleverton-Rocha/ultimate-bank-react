export interface User {
  id: number
  name: string
  email: string
  account: Account
}

export interface Account {
  id: number
  balance: number
  creationDate: Date
  transactions: Transaction[]
}

export interface Transaction {
  id: number
  type: string
  amount: number
  description: string
  transactionDate: Date
}

export interface LoginResponse {
  accessToken: string
  hashedCPF: string
  expiresIn: number
}

export interface RegisterResponse {
  id: number
  CPF: string
  name: string
  email: string
  password: string
}

export interface transactionRequest {
  hashedCPF: string
  amount: number
  type: string
  description: string
}

export interface transferRequest {
  hashedCPF: string
  receiverCPF: string
  amount: number
  description: string
}
