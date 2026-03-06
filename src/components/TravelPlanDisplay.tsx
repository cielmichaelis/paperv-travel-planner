interface Activity {
  name: string
  description: string
  cost: number
  time: string
}

interface DayPlan {
  day: number
  activities: Activity[]
  totalCost: number
}

interface TravelPlan {
  destination: string
  duration: number
  style: string
  budget: number
  days: DayPlan[]
  totalCost: number
}

interface TravelPlanDisplayProps {
  plan: TravelPlan
}

const TravelPlanDisplay: React.FC<TravelPlanDisplayProps> = ({ plan }) => {
  const getStyleName = (style: string): string => {
    switch (style) {
      case 'adventure': return '冒险探索'
      case 'relaxation': return '休闲度假'
      case 'culture': return '文化体验'
      case 'food': return '美食品鉴'
      default: return '默认'
    }
  }

  return (
    <div className="card result-section">
      <h2>旅行计划</h2>
      <div className="plan-summary">
        <p><strong>目的地:</strong> {plan.destination}</p>
        <p><strong>旅行风格:</strong> {getStyleName(plan.style)}</p>
        <p><strong>旅行天数:</strong> {plan.duration} 天</p>
        <p><strong>预算:</strong> {plan.budget} 元</p>
        <p><strong>预计总费用:</strong> {plan.totalCost.toFixed(2)} 元</p>
      </div>

      <div className="plan-details">
        <h3>每日行程</h3>
        {plan.days.map((dayPlan) => (
          <div key={dayPlan.day} className="plan-item">
            <div className="plan-day">第 {dayPlan.day} 天</div>
            <div className="plan-activities">
              {dayPlan.activities.map((activity, index) => (
                <div key={index} className="plan-activity">
                  <strong>{activity.time}:</strong> {activity.name} - {activity.description}
                  <span style={{ marginLeft: '10px', color: '#666' }}>¥{activity.cost.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '10px', fontWeight: '500' }}>
              当日费用: ¥{dayPlan.totalCost.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelPlanDisplay