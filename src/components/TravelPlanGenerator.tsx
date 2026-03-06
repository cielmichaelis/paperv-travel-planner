import { useState } from 'react'

interface TravelPlanGeneratorProps {
  style: string
  destination: string
  duration: number
  budget: number
  onGenerate: (plan: any) => void
}

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

const TravelPlanGenerator: React.FC<TravelPlanGeneratorProps> = ({ 
  style, 
  destination, 
  duration, 
  budget, 
  onGenerate 
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  const generateActivities = (day: number): Activity[] => {
    const activities: Activity[] = []
    const dailyBudget = budget / duration

    switch (style) {
      case 'adventure':
        activities.push(
          { name: '徒步旅行', description: '探索当地自然风光', cost: dailyBudget * 0.3, time: '上午' },
          { name: '攀岩/漂流', description: '体验刺激的户外活动', cost: dailyBudget * 0.4, time: '下午' },
          { name: '露营/星空观测', description: '在户外过夜，欣赏星空', cost: dailyBudget * 0.3, time: '晚上' }
        )
        break
      case 'relaxation':
        activities.push(
          { name: '海滩/泳池', description: '享受阳光和水的乐趣', cost: dailyBudget * 0.2, time: '上午' },
          { name: 'SPA按摩', description: '放松身心，缓解压力', cost: dailyBudget * 0.5, time: '下午' },
          { name: '夕阳晚餐', description: '在美景中享用晚餐', cost: dailyBudget * 0.3, time: '晚上' }
        )
        break
      case 'culture':
        activities.push(
          { name: '博物馆/历史遗迹', description: '了解当地历史文化', cost: dailyBudget * 0.3, time: '上午' },
          { name: '传统市场', description: '体验当地生活，购买特色商品', cost: dailyBudget * 0.3, time: '下午' },
          { name: '文化表演', description: '观看当地传统表演', cost: dailyBudget * 0.4, time: '晚上' }
        )
        break
      case 'food':
        activities.push(
          { name: '早市美食', description: '品尝当地早餐和小吃', cost: dailyBudget * 0.2, time: '上午' },
          { name: '烹饪课程', description: '学习当地特色菜肴制作', cost: dailyBudget * 0.4, time: '下午' },
          { name: '美食之旅', description: '在当地餐厅享用特色晚餐', cost: dailyBudget * 0.4, time: '晚上' }
        )
        break
      default:
        activities.push(
          { name: '城市观光', description: '游览当地主要景点', cost: dailyBudget * 0.3, time: '上午' },
          { name: '购物', description: '购买当地特色商品', cost: dailyBudget * 0.3, time: '下午' },
          { name: '自由活动', description: '根据个人喜好安排', cost: dailyBudget * 0.4, time: '晚上' }
        )
    }

    return activities
  }

  const generatePlan = () => {
    setIsGenerating(true)

    // 模拟生成过程
    setTimeout(() => {
      const days: DayPlan[] = []
      let totalCost = 0

      for (let i = 1; i <= duration; i++) {
        const activities = generateActivities(i)
        const dayCost = activities.reduce((sum, activity) => sum + activity.cost, 0)
        totalCost += dayCost

        days.push({
          day: i,
          activities,
          totalCost: dayCost
        })
      }

      const plan: TravelPlan = {
        destination,
        duration,
        style,
        budget,
        days,
        totalCost
      }

      onGenerate(plan)
      setIsGenerating(false)
    }, 1000)
  }

  return (
    <div className="card">
      <h2>生成旅行计划</h2>
      <p>目的地: {destination}</p>
      <p>旅行风格: {getStyleName(style)}</p>
      <p>旅行天数: {duration} 天</p>
      <p>预算: {budget} 元</p>
      <button 
        onClick={generatePlan} 
        disabled={isGenerating}
      >
        {isGenerating ? '生成中...' : '生成旅行计划'}
      </button>
    </div>
  )
}

const getStyleName = (style: string): string => {
  switch (style) {
    case 'adventure': return '冒险探索'
    case 'relaxation': return '休闲度假'
    case 'culture': return '文化体验'
    case 'food': return '美食品鉴'
    default: return '默认'
  }
}

export default TravelPlanGenerator