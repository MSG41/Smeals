import { describe, it, expect, afterEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import AboutView from './AboutView.vue'

describe('AboutView', () => {
  let wrapper: VueWrapper<any>

  afterEach(() => {
    // Clean up the mounted component after each test
    wrapper.unmount()
  })

  it('renders the About view correctly', () => {
    wrapper = mount(AboutView)

    // Check if the page title is rendered correctly
    const title = wrapper.find('h1')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('About Me')

    // Check if the name is highlighted correctly
    const name = wrapper.find('.highlight')
    expect(name.exists()).toBe(true)
    expect(name.text()).toBe('Salim Thaifa')

    // Check if the paragraphs are rendered correctly
    const paragraphs = wrapper.findAll('p')
    expect(paragraphs.length).toBe(6)
    expect(paragraphs[0].text()).toContain('Hi there!')
    expect(paragraphs[1].text()).toContain('I took immense pleasure')
    expect(paragraphs[2].text()).toContain('Throughout the development process')
    expect(paragraphs[3].text()).toContain("I'm aware that there is always room")
    expect(paragraphs[4].text()).toContain('One of the core features')
    expect(paragraphs[5].text()).toContain('Thank you for using this app')
  })
})
