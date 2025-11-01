import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentOrders } from "@/components/recent-orders"
import { TopProducts } from "@/components/top-products"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Tableau de bord</h1>
          <p className="text-muted-foreground text-lg">Gérez vos ventes et votre inventaire de vêtements</p>
        </div>
        <DashboardStats />
        <div className="grid gap-6 md:grid-cols-2">
          <RecentOrders />
          <TopProducts />
        </div>
      </main>
    </div>
  )
}
