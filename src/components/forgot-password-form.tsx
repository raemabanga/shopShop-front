"use client"

import type React from "react"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ArrowLeft, Mail } from "lucide-react"

export function ForgotPasswordForm() {

  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi de l'email de réinitialisation
    console.log("Reset password for:", email)
    setIsSubmitted(true)
    // Redirection vers la page OTP après 2 secondes
    setTimeout(() => {
      navigate("/verify-otp")
    }, 2000)
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
        <CardTitle className="text-2xl">Mot de passe oublié</CardTitle>
        <CardDescription>
          {isSubmitted
            ? "Un code de vérification a été envoyé à votre email"
            : "Entrez votre email pour recevoir un code de réinitialisation"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg">
              Envoyer le code
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Vérifiez votre boîte de réception et entrez le code reçu
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link
          to="/login"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à la connexion
        </Link>
      </CardFooter>
    </Card>
  )
}