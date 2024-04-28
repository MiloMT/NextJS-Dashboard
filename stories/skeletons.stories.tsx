import DashboardSkeleton, 
{ CardSkeleton, 
  CardsSkeleton, 
  RevenueChartSkeleton, 
  InvoiceSkeleton,
  LatestInvoicesSkeleton,
  TableRowSkeleton,
  InvoicesMobileSkeleton,
  InvoicesTableSkeleton
} from "@/app/ui/skeletons";

export default {
  title: "Components/Skeletons",
  component: DashboardSkeleton,
}

export const CardSkele = () => (
  <CardSkeleton />
)

export const CardsSkele = () => (
  <CardsSkeleton />
)

export const RevenueChartSkele = () => (
  <RevenueChartSkeleton />
)

export const InvoiceSkele = () => (
  <InvoiceSkeleton />
)

export const LatestInvoicesSkele = () => (
  <LatestInvoicesSkeleton />
)

export const TableRowSkele = () => (
  <TableRowSkeleton />
)

export const InvoicesMobileSkele = () => (
  <InvoicesMobileSkeleton />
)

export const InvoicesTableSkele = () => (
  <InvoicesTableSkeleton />
)

export const DashboardSkele = () => (
  <DashboardSkeleton />
)