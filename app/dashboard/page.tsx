import WalletCard from "@/components/WalletCard";
import KPIScroll from "@/components/KPIScroll";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 pt-4 pb-6">
      <div className="max-w-md mx-auto space-y-5">
        <WalletCard balance={1000} loading={false} />
        <KPIScroll />
      </div>
    </main>
  );
}