import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const products = [
  {
    name: "Robe d'été",
    sales: 145,
    percentage: 85,
  },
  {
    name: "Jean slim",
    sales: 132,
    percentage: 78,
  },
  {
    name: "Chemise blanche",
    sales: 98,
    percentage: 58,
  },
  {
    name: "Veste en cuir",
    sales: 76,
    percentage: 45,
  },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Produits populaires</CardTitle>
        <CardDescription>Vos articles les plus vendus ce mois-ci</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{product.name}</span>
                <span className="text-muted-foreground">{product.sales} ventes</span>
              </div>
              <Progress value={product.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
