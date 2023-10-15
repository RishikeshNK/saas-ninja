import Container from '@/components/container'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <Container>
      <div className='flex items-center justify-between py-4'>
        <div>
          <h1 className='text-3xl font-bold'>SaaS Ninja</h1>
        </div>
        <ModeToggle />
      </div>
    </Container>
  )
}
