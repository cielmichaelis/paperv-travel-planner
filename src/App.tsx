import { useState, useEffect } from 'react'
import './App.css'
import TravelStyleForm from './components/TravelStyleForm'
import TravelPlanGenerator from './components/TravelPlanGenerator'
import TravelPlanDisplay from './components/TravelPlanDisplay'

function App() {
  const [travelStyle, setTravelStyle] = useState<string>('')
  const [destination, setDestination] = useState<string>('')
  const [duration, setDuration] = useState<number>(3)
  const [budget, setBudget] = useState<number>(1000)
  const [travelPlan, setTravelPlan] = useState<any>(null)

  // 从localStorage加载数据
  useEffect(() => {
    const savedPlan = localStorage.getItem('travelPlan')
    if (savedPlan) {
      setTravelPlan(JSON.parse(savedPlan))
    }
    const savedStyle = localStorage.getItem('travelStyle')
    if (savedStyle) {
      setTravelStyle(savedStyle)
    }
    const savedDestination = localStorage.getItem('destination')
    if (savedDestination) {
      setDestination(savedDestination)
    }
    const savedDuration = localStorage.getItem('duration')
    if (savedDuration) {
      setDuration(Number(savedDuration))
    }
    const savedBudget = localStorage.getItem('budget')
    if (savedBudget) {
      setBudget(Number(savedBudget))
    }
  }, [])

  const handleStyleSubmit = (style: string, dest: string, days: number, budget: number) => {
    setTravelStyle(style)
    setDestination(dest)
    setDuration(days)
    setBudget(budget)
    // 存储到localStorage
    localStorage.setItem('travelStyle', style)
    localStorage.setItem('destination', dest)
    localStorage.setItem('duration', days.toString())
    localStorage.setItem('budget', budget.toString())
  }

  const handlePlanGenerate = (plan: any) => {
    setTravelPlan(plan)
    // 存储到localStorage
    localStorage.setItem('travelPlan', JSON.stringify(plan))
  }

  const clearStorage = () => {
    localStorage.removeItem('travelPlan')
    localStorage.removeItem('travelStyle')
    localStorage.removeItem('destination')
    localStorage.removeItem('duration')
    localStorage.removeItem('budget')
    setTravelPlan(null)
    setTravelStyle('')
    setDestination('')
    setDuration(3)
    setBudget(1000)
  }

  return (
    <div className="container">
      <h1>旅行计划生成器</h1>
      <button onClick={clearStorage} style={{ marginBottom: '1rem', backgroundColor: '#ff4d4f' }}>
        清除历史记录
      </button>
      <TravelStyleForm onSubmit={handleStyleSubmit} />
      {travelStyle && (
        <TravelPlanGenerator 
          style={travelStyle}
          destination={destination}
          duration={duration}
          budget={budget}
          onGenerate={handlePlanGenerate}
        />
      )}
      {travelPlan && (
        <TravelPlanDisplay plan={travelPlan} />
      )}
    </div>
  )
}

export default App