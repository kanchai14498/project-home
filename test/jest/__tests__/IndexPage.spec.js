import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awe2some.')
  });
  it('firstName', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h2')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Kanchai')
  });
  it('surName', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h3')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Buangam')
  });
  it('studentID', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h4')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('6604101301')
  });



  it('check text content to be as defined in variable', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'ฉันรัก Vue.'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรัก Vue.')
  });

  
})

test('should show the form element on the user output', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('should have button', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })