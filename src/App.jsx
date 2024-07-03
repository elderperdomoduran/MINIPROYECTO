import CardsList from './components/CardsList'
import Header from './components/Header'
import { AppProvider } from './components/Context'

function App() {
  return (
    <AppProvider>
      <div className='container md:container md:mx-auto'>
        <Header />
        <CardsList />
        </div>
    </AppProvider>
  )
}

export default App
