"use client"

import type React from "react"
import { useState, useRef } from "react"
import {Link, useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ArrowLeft, Shield } from "lucide-react"

export function VerifyOtpForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useNavigate()

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus sur le champ suivant
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpCode = otp.join("")
    console.log("OTP Code:", otpCode)
    // Logique de vérification OTP
    router("/dashboard")
  }

  const handleResend = () => {
    console.log("Resending OTP...")
    setOtp(["", "", "", "", "", ""])
    inputRefs.current[0]?.focus()
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
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl">Vérification OTP</CardTitle>
        <CardDescription>Entrez le code à 6 chiffres envoyé à votre email</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label className="sr-only">Code OTP</Label>
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-semibold"
                  required
                />
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Vérifier le code
          </Button>
        </form>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={handleResend}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Vous n'avez pas reçu le code ? <span className="font-medium text-primary">Renvoyer</span>
          </button>
        </div>
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