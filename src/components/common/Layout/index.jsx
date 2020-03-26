import React from "react"
import "./layout.css"
import { Header, Footer } from "components/theme"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
