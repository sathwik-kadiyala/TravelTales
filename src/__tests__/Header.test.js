import { render, screen } from "@testing-library/react"
import Header from "../Components/Header"
import '@testing-library/jest-dom'

test("header component",()=>{
    render(<Header/>)
    expect(document.querySelector(".header")).toBeInTheDocument()
    expect(screen.getByText("Travel")).toBeInTheDocument()
})