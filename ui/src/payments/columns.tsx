"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  booking_date: Date
  transaction_date: Date
  partner_name: string
  value: number
  balance: number
  reference: string
  tag: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "booking_date",
    header: "Dátum",
  },
  {
    accessorKey: "partner_name",
    header: "Partner",
  },
  {
    accessorFn: row => row.value.toLocaleString() + " Ft",
    // accessorKey: "value",
    header: "Összeg",
  },
  {
    accessorFn: row => row.balance.toLocaleString() + " Ft",
    // accessorKey: "balance",
    header: "Egyenleg",
  },
  {
    accessorKey: "tag",
    header: "Csoport"
  }
]
