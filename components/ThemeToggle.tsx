import { useEffect, useState } from 'react'
import { Switch } from './Switch'

export const ThemeToggle = () => {
  const [checked, setChecked] = useState<boolean | undefined>()

  useEffect(() => {
    if (
      window &&
      (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    ) {
      document.documentElement.classList.add('dark')
      setChecked(true)
      return
    }

    setChecked(false)
  }, [])

  return (
    <Switch
      onColorClass="checked:bg-gray-900"
      checked={checked}
      onChange={() => {
        setChecked(undefined)
        toggleColor()
      }}
    />
  )
}

function toggleColor() {
  const isDark = document.documentElement.classList.contains('dark')

  if (isDark) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}
