import { addWrapper, capitalizePrint, getAbsoluteUrl, isRawHTML } from '../../src/js/functions'

describe('addWrapper()', () => {
  it('add a div wrapper to a raw html', () => {
    const params = {
      font: 'TimesNewRoman',
      font_size: '12px'
    }
    expect(addWrapper('<span>Test</span>', params)).toBe('<div style="font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;"><span>Test</span></div>')
  })
})

describe('capitalizePrint()', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizePrint('test')).toBe('Test')
  })
})

describe('isRawHTML()', () => {
  it('string `My Header` return `false`', () => {
    expect(isRawHTML('My Header')).toBe(false)
  })

  it('`<h1>My HTML Header</h1>` return `true`', () => {
    expect(isRawHTML('<h1>My HTML Header</h1>')).toBe(true)
  })

  it('`<h1>HTML syntax error` return `false`', () => {
    expect(isRawHTML('<h1>HTML syntax error')).toBe(false)
  })
})

describe('getAbsoluteUrl()', () => {
  it('absolute url should be returned unchanged', () => {
    expect(getAbsoluteUrl('http://google.com')).toBe('http://google.com')
    expect(getAbsoluteUrl('blob://FUNKY_DATAS')).toBe('blob://FUNKY_DATAS')
  })

  it('relative url should be prefixed with current host', () => {
    expect(getAbsoluteUrl('/awesome/url')).toBe('http://localhost:9876/awesome/url')
    expect(getAbsoluteUrl('awesome/url/without/leading/slash')).toBe('http://localhost:9876/awesome/url/without/leading/slash')
  })
})
