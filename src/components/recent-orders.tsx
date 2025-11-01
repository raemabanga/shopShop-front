import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: "#1234",
    customer: "Marie Dubois",
    product: "Robe d'été",
    amount: "89.99 €",
    status: "Livré",
  },
  {
    id: "#1235",
    customer: "Pierre Martin",
    product: "Chemise blanche",
    amount: "45.50 €",
    status: "En cours",
  },
  {
    id: "#1236",
    customer: "Sophie Laurent",
    product: "Jean slim",
    amount: "79.99 €",
    status: "En cours",
  },
  {
    id: "#1237",
    customer: "Luc Bernard",
    product: "Veste en cuir",
    amount: "199.99 €",
    status: "Livré",
  },
]

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Commandes récentes</CardTitle>
        <CardDescription>Vos dernières commandes de vêtements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <p className="text-sm font-medium">{order.customer}</p>
                <p className="text-sm text-muted-foreground">{order.product}</p>
                <p className="text-xs text-muted-foreground">{order.id}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm font-medium">{order.amount}</p>
                <Badge variant={order.status === "Livré" ? "default" : "secondary"} className="text-xs">
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
