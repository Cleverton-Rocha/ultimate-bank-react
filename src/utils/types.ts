export interface User {
  id: number
  firstName: string
  lastName: string
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
  to: string
  from: string
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

export interface TransactionRequest {
  hashedCPF: string
  amount: number
  type: string
  description: string
}

export interface TransferRequest {
  hashedCPF: string
  receiverCPF: string
  amount: number
  description: string
}

export interface UpdateUserData {
  hashedCPF: string
  firstName?: string
  lastName?: string
  email?: string
}

export interface UpdatePasswordData {
  hashedCPF: string
  currentPassword: string
  newPassword: string
}
