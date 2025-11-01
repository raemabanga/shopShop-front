"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import {Link, useNavigate} from "react-router-dom"

export function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de connexion ici
    console.log("Login:", { email, password })
    navigate("/dashboard")
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-3 text-center">
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-primary">
            <ShoppingBag className="h-8 w-8" />
            <span className="text-2xl font-bold">Fashion Store</span>
          </div>
        </div>
        <CardTitle className="text-2xl">Connexion</CardTitle>
        <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mot de passe</Label>
              <Link to="/forgot-password" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mot de passe oublié ?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Se connecter
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="text-primary hover:underline font-medium">
            S'inscrire
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
