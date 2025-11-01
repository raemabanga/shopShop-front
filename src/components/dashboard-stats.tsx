import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, ShoppingCart, Package, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Ventes totales",
    value: "12 345 €",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Commandes",
    value: "234",
    change: "+8.2%",
    icon: ShoppingCart,
  },
  {
    title: "Produits",
    value: "89",
    change: "+3",
    icon: Package,
  },
  {
    title: "Taux de conversion",
    value: "3.2%",
    change: "+0.5%",
    icon: TrendingUp,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-accent font-medium">{stat.change}</span> par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
