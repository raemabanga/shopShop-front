import {Link,useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ShoppingBag, LogOut, Settings } from "lucide-react"

export function DashboardHeader() {
  const navigate = useNavigate()
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/dashboard" className="flex items-center gap-2 text-primary">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl font-bold">Fashion Store</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={()=> navigate('/profile')} >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Paramètres</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={()=> navigate('/login')} >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Déconnexion</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
