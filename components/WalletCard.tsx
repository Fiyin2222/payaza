"use client";

type Props = {
  balance: number;
  loading: boolean;
};

export default function WalletCard({ balance, loading }: Props) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <p className="text-sm text-gray-500">Wallet Balance</p>

      {loading ? (
        <div className="h-8 w-32 bg-gray-200 animate-pulse rounded mt-2"></div>
      ) : (
        <h1 className="text-2xl font-bold mt-2">
          ₦
          {balance.toLocaleString("en-NG", {
            minimumFractionDigits: 2,
          })}
        </h1>
      )}
    </div>
  );
}