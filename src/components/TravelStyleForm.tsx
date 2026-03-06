import { useState } from 'react'

interface TravelStyleFormProps {
  onSubmit: (style: string, destination: string, duration: number, budget: number) => void
}

const TravelStyleForm: React.FC<TravelStyleFormProps> = ({ onSubmit }) => {
  const [style, setStyle] = useState<string>('')
  const [destination, setDestination] = useState<string>('')
  const [duration, setDuration] = useState<number>(3)
  const [budget, setBudget] = useState<number>(1000)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(style, destination, duration, budget)
  }

  return (
    <div className="card">
      <h2>选择旅行风格</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>旅行风格</label>
          <div>
            <div className="style-option">
              <input
                type="radio"
                id="adventure"
                name="style"
                value="adventure"
                checked={style === 'adventure'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="adventure">冒险探索</label>
            </div>
            <div className="style-option">
              <input
                type="radio"
                id="relaxation"
                name="style"
                value="relaxation"
                checked={style === 'relaxation'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="relaxation">休闲度假</label>
            </div>
            <div className="style-option">
              <input
                type="radio"
                id="culture"
                name="style"
                value="culture"
                checked={style === 'culture'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="culture">文化体验</label>
            </div>
            <div className="style-option">
              <input
                type="radio"
                id="food"
                name="style"
                value="food"
                checked={style === 'food'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="food">美食品鉴</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>目的地</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="请输入目的地"
            required
          />
        </div>

        <div className="form-group">
          <label>旅行天数</label>
          <input
            type="number"
            min="1"
            max="30"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            required
          />
        </div>

        <div className="form-group">
          <label>预算（元）</label>
          <input
            type="number"
            min="100"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit">提交</button>
      </form>
    </div>
  )
}

export default TravelStyleForm