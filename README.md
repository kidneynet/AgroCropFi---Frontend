# AgroCropFi — Frontend

AgroCropFi is a decentralized agricultural finance platform that connects farmers and investors through tokenized crop listings on the **Stellar blockchain**. Farmers can tokenize their expected crop yields to raise funding, while investors can browse listings, assess risk, and fund crops — all on-chain.

---

## What It Does

- **Farmers** create crop token listings representing their expected yield, funding goal, and harvest date
- **Investors** browse the marketplace, evaluate risk scores, track funding progress, and invest in crop tokens
- All transactions are settled on the **Stellar network** (testnet by default)
- Role-based dashboards give farmers and investors tailored views of their activity

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Blockchain | Stellar SDK (`@stellar/stellar-sdk`) |
| State Management | Zustand |
| Server State / Fetching | TanStack React Query |
| HTTP Client | Axios |
| Icons | Lucide React |

---

## Project Structure

```
app/
  (auth)/           # Login & Register pages
  (dashboard)/
    farmer/         # Farmer dashboard
    investor/       # Investor dashboard
  (marketplace)/
    listings/       # Public crop token marketplace
  page.tsx          # Landing page

components/
  features/         # CropTokenCard, FundingProgress, RiskScoreBadge
  layout/           # Navbar, Sidebar, Footer
  providers/        # App-level providers (React Query, etc.)
  ui/               # Reusable primitives: Button, Card, Badge

hooks/
  useCropTokens.ts  # Fetch and manage crop token listings
  useWallet.ts      # Stellar wallet connection and state

lib/
  api/client.ts     # Axios instance and API helpers
  stellar/client.ts # Stellar SDK setup and helpers
  utils/helpers.ts  # Shared utility functions

store/
  authStore.ts      # Zustand store for wallet/auth state

types/
  index.ts          # Core domain types: User, CropToken, Investment
```

---

## Core Domain Types

```ts
type UserRole = "farmer" | "investor";

interface CropToken {
  id: string;
  farmerId: string;
  cropType: string;
  expectedYield: number;
  fundingGoal: number;
  fundedAmount: number;
  riskScore: number;        // 0–100, lower is safer
  harvestDate: string;
  status: "open" | "funded" | "repaid" | "defaulted";
}
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A running instance of the AgroCropFi backend API
- A Stellar testnet wallet (e.g. [Freighter](https://www.freighter.app/))

### Installation

```bash
git clone https://github.com/your-org/AgroCropFi---Frontend.git
cd AgroCropFi---Frontend
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_APP_NAME=AgroCropFi
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Running Locally

```bash
npm run dev
```

App runs at `http://localhost:3000`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## Key Features

- **Crop Token Marketplace** — Browse open crop token listings with funding progress and risk indicators
- **Role-Based Dashboards** — Separate views and flows for farmers and investors
- **Stellar Wallet Integration** — Connect a Stellar wallet to authenticate and sign transactions
- **Risk Score Badges** — Visual risk indicators on every crop listing to guide investor decisions
- **Funding Progress Tracking** — Real-time progress bars showing how close a listing is to its funding goal
- **On-Chain Investment** — Investments are executed as Stellar transactions, not just database records

---

## Blockchain Integration

AgroCropFi uses the **Stellar testnet** for development. The `lib/stellar/client.ts` module handles SDK initialization and transaction helpers. Wallet state (public key, connection status) is managed globally via Zustand in `store/authStore.ts` and exposed through the `useWallet` hook.

To switch to mainnet, update `NEXT_PUBLIC_STELLAR_NETWORK` and `NEXT_PUBLIC_STELLAR_HORIZON_URL` in your environment.

---

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Follow the existing code style — Prettier config is in `.prettierrc`
3. Keep components small and typed — all domain types live in `types/index.ts`
4. Open a pull request with a clear description of what changed and why

---

## License

