
const restoreConsole = () => {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
  return iframe.contentWindow.console
}

const isDomain = (str) => {
  if (!/^https?:\/\//.test(str)) return false
  if (/\s/.test(str.trim())) return false
  return true
}

const trim = (str) => {
  if (!str) return ''
  return str.trimEnd()
}

const trimWrap = (str) => {
  return trim(str).replace(/\\r/g, '\r').replace(/\\n/g, '\n')
}

if (ENVIRONMENT === 'development') {
  GLOBAL && (GLOBAL.console = restoreConsole())
}
const log = (...args) => {
  if (ENVIRONMENT === 'development') {
    GLOBAL.console.log(...args)
  }
}

export {
  trim,
  trimWrap,
  restoreConsole,
  isDomain,
  log
}
