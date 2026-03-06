import { render, screen, fireEvent } from '@testing-library/react'
import TravelStyleForm from './TravelStyleForm'

describe('TravelStyleForm', () => {
  test('renders form correctly', () => {
    render(<TravelStyleForm onSubmit={() => {}} />);
    
    expect(screen.getByText('选择旅行风格')).toBeInTheDocument();
    expect(screen.getByLabelText('冒险探索')).toBeInTheDocument();
    expect(screen.getByLabelText('休闲度假')).toBeInTheDocument();
    expect(screen.getByLabelText('文化体验')).toBeInTheDocument();
    expect(screen.getByLabelText('美食品鉴')).toBeInTheDocument();
    expect(screen.getByLabelText('目的地')).toBeInTheDocument();
    expect(screen.getByLabelText('旅行天数')).toBeInTheDocument();
    expect(screen.getByLabelText('预算（元）')).toBeInTheDocument();
    expect(screen.getByText('提交')).toBeInTheDocument();
  })

  test('submits form with correct values', () => {
    const mockSubmit = jest.fn();
    render(<TravelStyleForm onSubmit={mockSubmit} />);
    
    fireEvent.click(screen.getByLabelText('冒险探索'));
    fireEvent.change(screen.getByLabelText('目的地'), { target: { value: '北京' } });
    fireEvent.change(screen.getByLabelText('旅行天数'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('预算（元）'), { target: { value: '2000' } });
    fireEvent.click(screen.getByText('提交'));
    
    expect(mockSubmit).toHaveBeenCalledWith('adventure', '北京', 5, 2000);
  })
})