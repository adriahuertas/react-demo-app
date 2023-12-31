import { describe, test, expect, beforeEach } from 'vitest'
import { type RenderResult, render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import store from './store.js'

const queryClient = new QueryClient()

describe('<App />', () => {
  let wrapper: RenderResult
  beforeEach(() => {
    wrapper = render(<Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>)
  })
  test('App mounts properly', () => {
    expect(wrapper).toBeTruthy()

    const text = screen.getByText(
      /acceder a la lista de usuarios/i
    )
    expect(text.textContent).toBeTruthy()
  })

  test('App displays Login Form when no user is logged', () => {
    expect(wrapper).toBeTruthy()

    const text = screen.getByText(
      /Inicia sesión/i
    )
    expect(text.textContent).toBeTruthy()
  })
})
