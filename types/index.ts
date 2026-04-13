// Core domain types for AgroCropFi

export type UserRole = "farmer" | "investor";

export interface User {
  id: string;
  walletAddress: string;
  role: UserRole;
}

export interface CropToken {
  id: string;
  farmerId: string;
  cropType: string;
  expectedYield: number;
  fundingGoal: number;
  fundedAmount: number;
  riskScore: number;
  harvestDate: string;
  status: "open" | "funded" | "repaid" | "defaulted";
}

export interface Investment {
  id: string;
  investorId: string;
  cropTokenId: string;
  amount: number;
  createdAt: string;
}
