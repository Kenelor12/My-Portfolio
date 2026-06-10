import { AppProvider } from '@/contexts/AppContext'
import PortfolioView from '@/components/PortfolioView'

export default function Home() {
  return (
    <AppProvider>
      <PortfolioView />
    </AppProvider>
  )
}
